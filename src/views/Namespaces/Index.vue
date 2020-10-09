<template>
    <div>
        <v-toolbar flat color="transparent">
            <v-toolbar-title>Namespaces</v-toolbar-title>
            <v-spacer />
            <v-btn icon to="/namespaces/create">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>

        <v-list v-if="namespaces.length > 0">
            <v-list-item-group>
                <v-list-item
                    v-for="ns in namespaces"
                    :key="ns.id"
                    :to="{ name: 'Namespaces.Edit', params: { id: ns.id } }"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ns.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <p v-else>You have no Namespaces!</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class NamespacesIndex extends Vue {
    get namespaces() {
        return this.$store.getters.allNamespaces;
    }
}
</script>
