<template>
    <article class = "post" v-for="post in postsList">
        <div>
            <img v-if="post.accountPicture != null" :src='accountPicturePath(post.accountPicture)' alt="Account picture">
            <p class= "post_date" v-text="post.title"></p>
        </div>
        <img v-if="post.postImage != null" :src='postImagePath(post.postImage)' alt="Posted picture">
        <p class = "post_text" v-text="post.body"></p>
        <div>
          <button v-on:click="increaseLike(post.id)" class="like-background">
            <img :src="likeButtonImagePath" class="like-button">
          </button>
          <p class= "likes"> {{post.likes}} likes</p>
        </div>
    </article>
    <button v-on:click="decreaseLike()" class="like-background">
      <img :src="likeButtonImagePath" class="dislike-button">
    </button>
</template>


<script>
export default {
    name: "Post",
    data: () => {
    return {
    postsList:[ ]
    }
  },
  mounted() {
      fetch('http://localhost:3000/api/posts')
      .then((response) => response.json())
      .then(data => this.postsList = data)
      .catch(err => console.log(err.message))
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
    font-size: large;
    text-decoration: underline;
}
.post_text{
    font-size: x-large;
}
.like-background{
  background: transparent;
  border:none;
}
.like-button {
  transition: transform 0.3s ease-in-out;
  background: transparent;
  border: none;              /* remove borders */
  padding: 0;                /* remove extra space */
  cursor: pointer;           /* show pointer on hover */
  outline: none;
  appearance: none;
}

.like-button:hover {
  transform: scale(1.2);
}
.dislike-button{
  transform: rotate(180deg);
  filter: invert(100%);
  max-width: 40px;
  max-height: 40px;
}
</style>