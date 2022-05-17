<template>
    <DefaultField
        :field="currentField"
        :errors="errors"
        :show-help-text="showHelpText"
    >
        <template #field>
            <div class="relative">
                <input
                    v-bind="extraAttributes"
                    class="w-full form-control form-input form-input-bordered"
                    @input="handleChange"
                    :value="value"
                    :id="currentField.uniqueKey"
                    :dusk="field.attribute"
                    :disabled="currentlyIsReadonly"
                    :list="`${field.attribute}-list`"
                />

                <Charcounter
                    :value="value"
                    :min-chars="field.minChars"
                    :max-chars="field.maxChars"
                    :warning-threshold="field.warningAt"
                ></Charcounter>

                <datalist
                    v-if="
                        currentField.suggestions &&
                        currentField.suggestions.length > 0
                    "
                    :id="`${field.attribute}-list`"
                >
                    <option
                        :key="suggestion"
                        v-for="suggestion in currentField.suggestions"
                        :value="suggestion"
                    />
                </datalist>
            </div>
        </template>
    </DefaultField>
</template>

<script>
    import { DependentFormField, HandlesValidationErrors } from "laravel-nova";
    import Charcounter from "../Charcounter";

    export default {
        mixins: [DependentFormField, HandlesValidationErrors],

        props: ["resourceName", "resourceId", "field"],

        components: {
            Charcounter,
        },

        computed: {
            defaultAttributes() {
                return {
                    type: this.currentField.type || "text",
                    min: this.currentField.min,
                    max: this.currentField.max,
                    step: this.currentField.step,
                    pattern: this.currentField.pattern,
                    placeholder:
                        this.currentField.placeholder || this.field.name,
                    class: this.errorClasses,
                };
            },

            extraAttributes() {
                const attrs = this.currentField.extraAttributes;

                return {
                    // Leave the default attributes even though we can now specify
                    // whatever attributes we like because the old number field still
                    // uses the old field attributes
                    ...this.defaultAttributes,
                    ...attrs,
                };
            },
        },
    };
</script>
