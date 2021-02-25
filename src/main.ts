import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Skeleton from 'vue-loading-skeleton';
// import VueSkeletonLoader from 'skeleton-loader-vue';

// Vue.component('vue-skeleton-loader', VueSkeletonLoader);

 
Vue.use(Skeleton)

//importing boostrap
import "bootstrap";

//importing jquery
import "jquery";
//import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/main.css";
import "@/assets/css/carousel.css";
import "vue-loading-skeleton/dist/vue-loading-skeleton.css"

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
