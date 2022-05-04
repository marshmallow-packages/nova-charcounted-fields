<template>
    <PanelItem :field="field">
        <template #value>
            <span>{{ field.value }}</span>
        </template>
    </PanelItem>
</template>

<script>
    export default {
        props: ["resource", "resourceName", "resourceId", "field"],
    };
</script>
