<template>
  <div class="home">
    <div class="alert alert-success">cool</div>
    <Header />
  </div>
</template>

<script >
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    //Sidebar 
    Header
  
  }
};
</script>
