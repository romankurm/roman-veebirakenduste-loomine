<template>
  <div class="footerExtra">
    <div class="body">
      <header-compo></header-compo>
      <router-view/>
    </div>
    <footer-compo></footer-compo>
  </div>
  
</template>
<script>
  import HeaderCompo from '@/components/Header.vue'
  import FooterCompo from '@/components/Footer.vue';
  export default {
    components: {
      FooterCompo,
      HeaderCompo
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgray;
  border-radius: 20px;
  height: 50px;
  min-width: 300px;
}

</style>
