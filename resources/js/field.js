import TextIndexField from "./components/TextCounted/IndexField.vue";
import TextDetailField from "./components/TextCounted/DetailField.vue";
import TextFormField from "./components/TextCounted/FormField.vue";

import TextAreaIndexField from "./components/TextareaCounted/IndexField.vue";
import TextAreaDetailField from "./components/TextareaCounted/DetailField.vue";
import TextAreaFormField from "./components/TextareaCounted/FormField.vue";

Nova.booting((Vue, router) => {
    Vue.component("index-text-counted", TextIndexField);
    Vue.component("detail-text-counted", TextDetailField);
    Vue.component("form-text-counted", TextFormField);
    Vue.component("index-textarea-counted", TextAreaIndexField);
    Vue.component("detail-textarea-counted", TextAreaDetailField);
    Vue.component("form-textarea-counted", TextAreaFormField);
});
