Nova.booting((Vue, router) => {
    Vue.component(
        "index-text-counted",
        require("./components/TextCounted/IndexField.vue").default
    );
    Vue.component(
        "detail-text-counted",
        require("./components/TextCounted/DetailField.vue").default
    );
    Vue.component(
        "form-text-counted",
        require("./components/TextCounted/FormField.vue").default
    );

    Vue.component(
        "index-textarea-counted",
        require("./components/TextareaCounted/IndexField.vue").default
    );
    Vue.component(
        "detail-textarea-counted",
        require("./components/TextareaCounted/DetailField.vue").default
    );
    Vue.component(
        "form-textarea-counted",
        require("./components/TextareaCounted/FormField.vue").default
    );
});
