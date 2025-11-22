<template>
  <div class = "flexbox_container_row">
    <side-compo></side-compo>
    <div class="posts_container">
      <post-compo :postList="postList"/>
    </div>
    <side-compo></side-compo>
  </div>
  <footer-compo></footer-compo>
</template>

<script>
import PostCompo from "@/components/Post.vue";
import FooterCompo from "@/components/Footer.vue";
import SideCompo from "@/components/Side.vue";
export default {
  name: 'MainView',
  components: {
    PostCompo,
    FooterCompo,
    SideCompo
  },
  data: function() {
  return {
  postList:[
  {accountName: "Kaspar", accountPicture: "assets/profile.png", postDate: "Oct 22, 2022", postImage: "assets/placeholder.png", postText: "Tartu 2020"},
  {accountName: "Kaspar", accountPicture: "assets/profile.png", postDate: "Oct 22, 2022", postImage: "assets/placeholder.png", postText: "Tartu 2020"},
  {accountName: "Kaspar", accountPicture: "assets/profile.png", postDate: "Oct 22, 2022", postImage: "assets/placeholder.png", postText: "Tartu 2020"},
  
  ]}},
}
</script>

<style scoped>
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

</style>