<template>
    <default-field :field="field">
        <template slot="field">
            <div class="relative">
                <textarea
                    v-model="value"
                    class="w-full form-control form-input form-input-bordered min-h-textarea py-3"
                    :class="errorClasses"
                    :placeholder="field.name"
                ></textarea>

                <charcounter :value="value" :min-chars="field.minChars" :max-chars="field.maxChars" :warning-threshold="field.warningAt"></charcounter>

            </div>

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</template>

<script>
    import {FormField, HandlesValidationErrors} from 'laravel-nova';
    import Charcounter from '../Charcounter';

    export default {
        mixins: [FormField, HandlesValidationErrors],

        props: ['resourceName', 'resourceId', 'field'],

        components: {
            Charcounter
        }
    }
</script>
