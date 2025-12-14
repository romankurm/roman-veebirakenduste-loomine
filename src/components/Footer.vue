<template>
    <footer>
        <p>Authors: Walter Võikar, Roman Kurm, Uku Lainemäe</p>
        <p>©TeamAK</p>
        </footer>
</template>


<script>
export default {
    name: "Footer",
    data: function() {
return {

}}}
</script>

<style scoped>
footer {
    background-color: lightgrey;
    border-radius: 20px;
    height: 50px;
    width:inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: small;
    justify-content: space-between
}
</style>