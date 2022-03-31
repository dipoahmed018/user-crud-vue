<script setup>
import User from './providers/User.vue';
import Api from './providers/Api.vue';
</script>
<template>
    <Api>
        <User>
            <router-view></router-view>
        </User>
    </Api>
</template>