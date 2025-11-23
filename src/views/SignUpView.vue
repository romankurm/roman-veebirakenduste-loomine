<template>
    <div>

        <form @submit.prevent="checkForm">
            <h2>Create an account</h2>
            <label for="email">Email</label>
            <input type="email" required v-model="email">
            <label for="password">Password</label>
            <input type="password" required v-model="password">
            <div v-if="errors.length" class="error">
                Please correct the following error(s):
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
            <div class="submit">
                <button>Sign up </button>
            </div>
        </form>


    </div>


</template>

<script>
export default {
    name: "SignUpView",

    data: function () {
        return {
            email: '',
            password: '',
            errors: [],
        }
    },
    methods: {
        checkForm: function (e) {

            this.errors = [];

            if (this.password.length < 8 || this.password > 15) {
                this.errors.push('password must be between 8-15 chars.');
            }
            let regex = /[a-z]{2,}/
            if (!regex.test(this.password)) {
                this.errors.push('Password must contain atleast two characters a-z.');
            }
            regex = /[A-Z]/
            if (!regex.test(this.password)) {
                this.errors.push('Password must contain atleast one character A-Z.');
            }
            regex = /[0-9]/
            if (!regex.test(this.password)) {
                this.errors.push('Password must contain atleast one number 0-9.');
            }
            regex = /^[A-Z]/
            if (!regex.test(this.password)) {
                this.errors.push('Password must start with uppercase A-Z.');
            }

            e.preventDefault();
        }
    }
}
</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(167, 154, 154);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: blue;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

button {
    background: rgb(8, 110, 110);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

h2,
.submit {
    text-align: center;
}

.error {
    color: red;
    font-size: 0.8em;
    margin-top: 10px;
    text-align: center;
}
</style>