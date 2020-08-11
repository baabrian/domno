import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueScrollReveal from "vue-scroll-reveal";
import { MdButton, MdDrawer, MdCard } from "vue-material/dist/components";
import { key } from "../key";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdDrawer);
Vue.use(VueResource);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '-50px',

});

//key is the root for access to the DB
Vue.http.options.root = key;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
