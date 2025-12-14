<template>
    <header>
        <nav>
            <router-link to="/">Main</router-link> |
            <router-link to="/signup">SignUp</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/about">Contacts</router-link> |
            <router-link to="/newPost">New Post</router-link>
        </nav> 
    </header>
</template>


<script>
export default {
    name: "Header",
    data: function() {
return {

}}}
</script>

<style scoped>
header {
    background-color: #35d8f9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    margin-bottom:20px;
    width:inherit;
}

nav {
    padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>