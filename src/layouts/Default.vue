<template>
    <div >
        <Header></Header>
        <router-view></router-view>
        <Misc></Misc>
        <Footer />
    </div>
  
</template>



<script lang="ts">

import Header from "../components/Header.vue";
import Misc from "../components/Misc.vue";
import Footer from "../components/Footer.vue";

import {Vue, Component, Prop}  from 'vue-property-decorator';
//import  Header from '@/components/Header';
//import {Header} from "../components/Header"

@Component({
    components: {
        Header,
        Footer,
        Misc
    }
})
export default class Default extends Vue{
//     components: {
//     Sidebar
//   }
}
</script>