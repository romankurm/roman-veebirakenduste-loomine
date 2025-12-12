<template>
  <header-compo></header-compo>
  
  <router-view/>
  <footer-compo></footer-compo>
  
</template>

<script>
  import HeaderCompo from '@/components/Header.vue'
  import FooterCompo from '@/components/Footer.vue';
  export default {
    data() {
      return {
        postList: []
      };
    },
    components: {
      FooterCompo,
      HeaderCompo
    },
    mounted() {
      fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => {
          this.$store.commit("setData", data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
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
