<template>
    <div v-if="post">
        <p> {{ post.title }}</p>
        <p> {{ post.date }}</p>
        <p> {{ post.body }}</p>
    </div>
    <div v-else>
        POST NOT FOUND
    </div>
</template>

<script>
    import auth from "../auth";
    export default {
        name: "PostView",
        props:['id'],
        data(){
            return {
                post: null,
                authResult: auth.authenticated(),
            }
        },
        mounted() {
            fetch(`http://localhost:3000/api/posts/${this.id}`)
            .then((response) => response.json())
            .then(data => this.post = data)
            .catch(err => console.log(err.message))
        }

    }
</script>
