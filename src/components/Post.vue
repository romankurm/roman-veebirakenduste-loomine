<template>
    <article @click="editPost(post.id)" class = "post" v-for="post in postsList">
        <div>
            <img v-if="post.accountPicture != null" :src='accountPicturePath(post.accountPicture)' alt="Account picture">
            <p class= "post_date" v-text="post.date"></p>
        </div>
        <img v-if="post.postImage != null" :src='postImagePath(post.postImage)' alt="Posted picture">
        <p class = "post_text" v-text="post.body"></p>
    </article>
</template>


<script>
export default {
    name: "Post",
    data: () => {
    return {
    postsList:[ ]
    }
  },
  methods: { 
    editPost(id){
      this.$router.push(`/post/${id}`)
    },

  },
  mounted() {
      fetch('http://localhost:3000/api/posts/')
      .then((response) => response.json())
      .then(data => this.postsList = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
article {
  display: flex;
  background-color: rgba(43, 254, 233, 0.57);
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 15px;
  gap:5px;
}
article div:first-child{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items:flex-end;
  flex-grow: 1;
  width: 100%;
}
article div:last-child{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
    flex-grow: 1;
    width: 100%;
    font-size: x-large;
}
article div img {
    height:30px;
    width: 30px;
}
article img{
    width: 100%;
}
article img:last-child{
    height:30px;
    width: 30px;
}
.post_date{
    font-size: larger;
    text-decoration: underline;
}
.post_text{
    font-size: x-large;
}
</style>