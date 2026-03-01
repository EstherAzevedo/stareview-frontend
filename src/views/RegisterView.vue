<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'  
import logo from '../assets/logo-star.png'    


const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')



</script>

<template>
    <div class="register-container">

    </div>
    <img :src="logo" alt="StaReview logo" />
    
</template>