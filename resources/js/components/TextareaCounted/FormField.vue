<template>
    <DefaultField
        :field="currentField"
        :errors="errors"
        :full-width-content="true"
        :show-help-text="showHelpText"
    >
        <template #field>
            <div class="relative">
                <textarea
                    v-bind="extraAttributes"
                    class="w-full form-control form-input form-input-bordered py-3 h-auto"
                    :id="currentField.uniqueKey"
                    :dusk="field.attribute"
                    :value="value"
                    @input="handleChange"
                />
                <Charcounter
                    :value="value"
                    :min-chars="field.minChars"
                    :max-chars="field.maxChars"
                    :warning-threshold="field.warningAt"
                ></Charcounter>
            </div>
        </template>
    </DefaultField>
</template>

<script>
    import { DependentFormField, HandlesValidationErrors } from "laravel-nova";
    import Charcounter from "../Charcounter";

    export default {
        mixins: [DependentFormField, HandlesValidationErrors],

        computed: {
            defaultAttributes() {
                return {
                    rows: this.currentField.rows,
                    class: this.errorClasses,
                    placeholder: this.field.name,
                };
            },
            extraAttributes() {
                const attrs = this.currentField.extraAttributes;

                return {
                    ...this.defaultAttributes,
                    ...attrs,
                };
            },
        },

        props: ["resourceName", "resourceId", "field"],

        components: {
            Charcounter,
        },
    };
</script>
