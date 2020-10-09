<template>
    <v-app>
        <Sidebar />
        <v-main>
            <v-container class="my-5">
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "./components/Sidebar.vue";

@Component({
    components: {
        Sidebar,
    },
})
export default class App extends Vue {}
</script>
