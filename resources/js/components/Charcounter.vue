<template>
    <p
        class="text-right font-bold opacity-50 text-80 text-xs absolute right-0 bottom-0 mr-2 mb-3"
    >
        <span :class="indicatorClass">{{ value.length }}</span
        ><span v-if="maxChars"> / {{ maxChars }}</span>
    </p>
</template>

<script>
    export default {
        props: ["value", "minChars", "maxChars", "warningThreshold"],

        computed: {
            indicatorClass: function () {
                if (this.minChars) {
                    if (this.value.length < this.minChars) {
                        return "text-danger text-red-500";
                    }
                }

                if (this.maxChars) {
                    if (this.value.length > this.maxChars) {
                        return "text-danger text-red-500";
                    }
                }

                if (this.warningThreshold) {
                    if (this.value.length > this.warningThreshold) {
                        return "text-orange text-orange-500";
                    }
                }

                return "text-success text-green-500";
            },
        },
    };
</script>
