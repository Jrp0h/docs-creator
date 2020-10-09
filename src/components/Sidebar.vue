<template>
    <v-navigation-drawer app permanent expand-on-hover>
        <!-- Display project title and settings -->
        <v-list v-if="projectOpen">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">Project title</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/projectsettings">
                <v-list-item-action>
                    <v-icon>mdi-application-cog</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>Project Settings</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- All different keywords -->
        <v-list v-if="projectOpen">
            <v-list-item v-for="link in links" :key="link.text" :to="{ name: link.path }">
                <v-list-item-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- View button -->
        <v-list-item-group v-if="projectOpen">
            <v-list-item to="/view">
                <v-list-item-action>
                    <v-icon>mdi-play</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>View Docs</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>

        <v-divider></v-divider>

        <!-- General stuff -->
        <v-list>
            <v-list-item-group>
                <v-list-item to="/">
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>All Projects</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Sidebar extends Vue {
    links = [
        {
            text: "Namespaces",
            path: "Namespaces.Index",
            icon: "mdi-file-tree",
        },
        {
            text: "Classes",
            path: "Classes.Index",
            icon: "mdi-layers-triple",
        },
        {
            text: "Structs",
            path: "Structs.Index",
            icon: "mdi-layers",
        },
        {
            text: "Interfaces",
            path: "Interfaces.Index",
            icon: "mdi-flash",
            // Flash, Device hub, rule or spellcheck
        },
        {
            text: "Enums",
            path: "Enums.Index",
            icon: "mdi-reorder-horizontal",
        },
        {
            text: "Delegates",
            path: "Delegates.Index",
            icon: "mdi-function",
        },
    ];

    get projectOpen(): boolean {
        return this.$store.getters.hasProjectOpen;
    }
}
</script>
