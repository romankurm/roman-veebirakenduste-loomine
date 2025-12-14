<template>
  <div class="container">
    <button v-if = "authResult" @click="Logout" class="center">Logout</button>
  </div>
  <div class = "flexbox_container_row">
    <side-compo></side-compo>
    <div class="posts_container">
      <post-compo :key="postKey" />
      <div class = "buttons">
        <button v-on:click="addPost()">
          ADD POST
        </button>
        <button v-on:click="deleteAll()">
          DELETE ALL
        </button>
      </div>
    </div>
    <side-compo></side-compo>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";
import PostCompo from "@/components/Post.vue";
import SideCompo from "@/components/Side.vue";
export default {
  name: "HomeView",
  components: {
    PostCompo,
    SideCompo
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated(),
    postKey: 0,
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    addPost() {
      this.$router.push('post/newPost')
    },
    async deleteAll() {
      await fetch('http://localhost:3000/api/posts/', {method: 'delete'})
      .then(() => this.status = 'Delete successful')
      .catch(err => console.log(err.message));
      this.postKey += 1;
    },
  }
};
</script>

<style scoped>

button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}

.posts_container {
    display: flex;
    flex-direction: column;
    min-width: 150px;
    flex-grow: 1;
    gap:10px;
}

.flexbox_container_row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap:20px;
}
.buttons{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  gap: 20px
}
</style>