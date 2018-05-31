import Vue from "vue";
import HelloComponent from "./components/Hello.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" :FiscalYear=2019 :theDates=[] />
    </div>
    `,
    data: { name: "Dell Fiscal Calendar" },
    components: {
        HelloComponent
    }
});
