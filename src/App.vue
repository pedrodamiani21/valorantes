<template>
  <div id="app">
   <nav-bar></nav-bar>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'App',

  components: {NavBar, FooterComponent},

}
</script>

<style>
  @import '@/assets/styles/style.css';
  @import '@/assets/styles/design.css';
  @import 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800';
</style>