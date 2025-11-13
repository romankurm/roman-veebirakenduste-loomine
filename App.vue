<template>
  <h1>{{ message }}</h1>
  <button @click="changeMessage">Click Me</button>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from Vue + Vite!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Updated message!'
    }
  }
}
</script>
