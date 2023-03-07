<template>
  <div class="app">
   <NavPage/> 
   <HeroPage/>
   <InputPage/>
   <ServicePage/>
   <BoostPage/>
   <FooterPage/>
  </div>
</template>

<script>
import NavPage from "./components/NavPage.vue";
import HeroPage from "./components/HeroPage.vue";
import InputPage from "./components/InputPage.vue";
import ServicePage from "./components/ServicePage.vue";
import BoostPage from "./components/BoostPage.vue";
import FooterPage from "./components/FooterPage.vue";


export default {
  name: 'App',
  components: {
    NavPage,
    HeroPage,
    InputPage,
    ServicePage,
    BoostPage,
    FooterPage,
  }
}
</script>

<style>
html, body {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 18px;
}

</style>
