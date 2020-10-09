import Vue from 'vue'
import Vuex from 'vuex'
import Namespace from '@/classes/Namespace'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    project: true,
    namespaces: new Array<Namespace>()
  },
  mutations: {
    addNamespace(state, ns: Namespace) {
      if (!Namespace.AlreadyExists(ns.name, state.namespaces)) {
        state.namespaces.push(ns);
      }
    }
  },
  actions: {
    addNamespace(context, name: string) {
      return new Promise((resolve, reject) => {

        if (Namespace.AlreadyExists(name, context.state.namespaces)) {
          reject("Namespace already exists");
          return;
        }

        const ns = new Namespace(name);
        context.commit("addNamespace", ns);

        const sublevels = ns.Sublevels;

        for (let i = 0; i < sublevels.length; i++) {
          context.commit("addNamespace", new Namespace(sublevels[i]));
        }

        resolve();
      });
    }
  },
  modules: {
  },
  getters: {
    hasProjectOpen(state) {
      return state.project != null;
    },
    allNamespaces(state) {
      return Namespace.SortByName(state.namespaces);
    }
  }
})
