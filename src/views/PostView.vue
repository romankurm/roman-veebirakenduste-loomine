<template>
    <div v-if="post" class = "form">
        <h2>A post</h2>
        <div class="centerHorizontally">
        <label class = "postLabel" for="postBody">Body </label>
        <textarea id="postBody" name="postBody" class="textField"> </textarea>
        </div>
        <div class = "buttons">
            <button @click="EditPost">Update</button>
            <button @click="DeletePost">Delete</button>
        </div>
            
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
        },
        methods: {
            
            async DeletePost() {
                await fetch(`http://localhost:3000/api/posts/${this.id}`, {method: 'delete'})
                .then(() => {this.status = 'Delete successful';})
                .catch(err => console.log(err.message));
                location.assign("/");
            },
            async EditPost() {
                let dateNowString = new Date(Date.now()).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                });
                console.log(dateNowString)
                var data = {
                    title: "Title",
                    date: dateNowString,
                    body: document.getElementById("postBody").value
                };
                console.log(data)
                await fetch(`http://localhost:3000/api/posts/${this.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include', //  Don't forget to specify this if you need cookies
                    body: JSON.stringify(data),
                    })
                    .then((data) => {
                    console.log(data);
                    //this.$router.push("/");
                    location.assign("/");
                    })
                    .catch((e) => {
                    console.log(e);
                    console.log("error");
                    });
            }
        }

    }
</script>

<style scoped>

button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  padding: 10px 16px;
  letter-spacing: 2px;
}

.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  padding: 40px;
  border-radius: 10px;

}
.textField {
  min-width: 200px;
  min-height: 100px;
  border-radius: 10px;
  resize: none;
}
label{
  font-size: 24px;
  padding-right: 48px;
}
.centerHorizontally{
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:20px;
}
</style>