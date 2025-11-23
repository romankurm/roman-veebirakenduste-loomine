<template>
    <article class = "post" v-for="post in postsList">
        <div>
            <img v-if="post.accountPicture != null" :src='accountPicturePath(post.accountPicture)' alt="Account picture">
            <p class= "post_date" v-text="post.postDate"></p>
        </div>
        <img v-if="post.postImage != null" :src='postImagePath(post.postImage)' alt="Posted picture">
        <p class = "post_text" v-text="post.postText"></p>
      <button v-on:click="increaseLike" icon="likeButtonImagePath()" Like post> </button>
    </article>
</template>


<script>
export default {
    name: "Post",
    data: () => {
    return {
    }},
    computed: {
        likeButtonImagePath() {
            return require(`../assets/like.png`);
        },
        postsList(){
            return this.$store.getters.postsList;
        },
    },
    methods: {
        accountPicturePath: function(path){
            return require(`../${path}`);
        },
        postImagePath: functi on(path){
            return require(`../${path}`);
        },
        increaseLike: function(path){
          this.$store.commit("increaseLikes")
        }
    }
    
}
</script>

<style scoped>
article {
    display: flex;
    background-color: lightpink;
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
    justify-content: space-between;
    align-items:center;
    flex-grow: 1;
    width: 100%;
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
    font-size: large;
    text-decoration: underline;
}
.post_text{
    font-size: x-large;
}
</style>