<template>
    <article class = "post" v-for="post in postList">
        <div>
            <img :src='accountPicturePath(post.accountPicture)' alt="Account picture">
            <p class= "post_date" v-text="post.postDate"></p>
        </div>
        
        <img :src='postImagePath(post.postImage)' alt="Posted picture">
        <p class = "post_text" v-text="post.postText"></p>
        <img :src='likeButtonImagePath' alt="Like button">
    </article>
</template>


<script>
export default {
    name: "Post",
    props: ["postList"],
    data: () => {
    return {
    }},
    computed: {
        likeButtonImagePath() {
            return require(`../assets/like.png`);
        },
    },
    methods: {
        accountPicturePath: function(path){
            return require(`../${path}`);
        },
        postImagePath: function(path){
            return require(`../${path}`);
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