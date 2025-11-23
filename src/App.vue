<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  
  <router-view/>
  <footer-compo></footer-compo>
  
</template>

<script>
  import FooterCompo from '@/components/Footer.vue';
  export default {
    data() {
      return {
        postList: []
      };
    },
    components: {
      FooterCompo
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
