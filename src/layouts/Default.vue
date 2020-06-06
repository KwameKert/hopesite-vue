<template>
    <div>
        <Header />
        <router-view />
    </div>
  
</template>



<script lang="ts">

import Header from "../components/Header.vue";

import {Vue, Component, Prop}  from 'vue-property-decorator';
//import  Header from '@/components/Header';
//import {Header} from "../components/Header"

@Component({
    components: {
        Header
    }
})
export default class Default extends Vue{
//     components: {
//     Sidebar
//   }
}
</script>