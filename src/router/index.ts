import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

import About from "@/views/About.vue";
import NamespacesIndex from "@/views/Namespaces/Index.vue";
import NamespacesCreate from "@/views/Namespaces/Create.vue";

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/namespaces',
    name: 'Namespaces.Index',
    component: NamespacesIndex
  },
  {
    path: '/namespaces/create',
    name: 'Namespaces.Create',
    component: NamespacesCreate
  },


  // THESE ARE NOT IMPLEMENTED!
  {
    path: '/classes',
    name: 'Classes.Index',
    component: NamespacesCreate
  },
  {
    path: '/structs',
    name: 'Structs.Index',
    component: NamespacesCreate
  },
  {
    path: '/interfaces',
    name: 'Interfaces.Index',
    component: NamespacesCreate
  },
  {
    path: '/enums',
    name: 'Enums.Index',
    component: NamespacesCreate
  },
  {
    path: '/delegates',
    name: 'Delegates.Index',
    component: NamespacesCreate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
