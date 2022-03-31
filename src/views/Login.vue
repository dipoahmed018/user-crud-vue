<script setup>
import { useRoute } from 'vue-router';
import UserLoginVue from '../components/auth/UserLogin.vue';
import AdminLoginVue from '../components/auth/AdminLogin.vue';
const route = useRoute()
const {type} = route.params
</script>

<template>
    
</template>