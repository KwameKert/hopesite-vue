import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

//importing boostrap
import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/main.css";
import "@/assets/css/carousel.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
