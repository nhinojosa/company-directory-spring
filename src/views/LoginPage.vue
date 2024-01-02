<script setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')
</script>

<template>
    <form class="min-h-screen m-10" @submit.prevent="logUserIn">
        <div class="mb-5">
            <label for="username" class="block mb-2 font-bold">Username</label>
            <input id="username" v-model="username" type="text" placeholder="Username" />
        </div>
        
        <div>
            <label for="password" class="block mb-2 font-bold">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Password" />   
        </div>

        <button type="submit" class=" mt-4 bg-green-500 px-4 py-2 hover:bg-green-800 hover:text-white">Log In</button>

    </form>
</template>