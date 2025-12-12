<template>
  <div class = "flexbox_container_row">
    <side-compo></side-compo>
    <div class="posts_container">
      <post-compo></post-compo>
    </div>
    <side-compo></side-compo>
  </div>
</template>

<script>
import PostCompo from "@/components/Post.vue";
import SideCompo from "@/components/Side.vue";
export default {
  name: 'MainView',
  components: {
    PostCompo,
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
    flex-basis: 900px;
    gap:10px;
}

.flexbox_container_row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap:20px;
}

</style>


