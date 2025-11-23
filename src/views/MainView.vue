<template>
  <div class = "flexbox_container_row">
    <side-compo></side-compo>
    <div class="posts_container">
      <post-compo></post-compo>
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
  return {}},
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


