<template>
    <div>
        <v-row>
            <v-col md="12">
                <v-card outlined>
                    <v-card-title>Add new Namespace</v-card-title>
                    <v-divider />
                    <v-container>
                        <v-form @submit.prevent="submit" class="px-3">
                            <v-text-field
                                autofocus
                                outlined
                                v-model="name"
                                label="Namespace"
                                :rules="rules"
                                :hint="hint"
                            />
                            <v-btn type="submit" outlined class="mt-3">Add Namespace</v-btn>
                        </v-form>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class NamespacesCreate extends Vue {
    name = "";

    get hint(): string {
        if (this.name.split(".").length > 1)
            return "This will create multiple namespaces!";

        return "";
    }

    rules = [
        (v: string) => v.length >= 1 || "You must have atleast one character!",
        (v: string) =>
            v.trim().split(" ").length == 1 ||
            "You can't have spaces in the name!",
    ];

    submit() {
        console.log("Submitting");
        if (!(this.name.length >= 1)) return;
        if (!(this.name.trim().split(" ").length == 1)) return;
        console.log("passed Validation");
        this.$store
            .dispatch("addNamespace", this.name.trim())
            .then(() => console.log("Namespace successfully added"))
            .catch(console.log);
    }
}
</script>
