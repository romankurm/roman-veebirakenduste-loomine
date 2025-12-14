<template>
  <div class = "form">
    <h2>Add post</h2>
    <div class="centerHorizontally">
    <label class = "postLabel" for="postBody">Body </label>
    <textarea id="postBody" name="postBody" class="textField"> </textarea>
    </div>
    <button @click="Add"  class="addPostButton">Add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";
export default {
  name: "newPost",
  components: {},
  data: function() {
    return {
      posts:[ ],
      authResult: auth.authenticated()
    }
  },
  methods: {
    Add() {
      //Creating new date as of posting
      let dateNowString = new Date(Date.now()).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      if(document.getElementById("postBody").value!=""){
        var data = {
          title: "",
          date: dateNowString,
          body: document.getElementById("postBody").value
        };
        console.log(this.postBody)
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
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
</style>