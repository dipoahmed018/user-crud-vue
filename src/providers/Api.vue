<script setup>
import { provide } from 'vue'
const api_url = "http://127.0.0.2/api"

fetch('http://127.0.0.2/sanctum/csrf-cookie', {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
    }
})

const call = async (url, method, data = {}, headers = {}) => {
    url = `${api_url}${url}`
    let config = {
        method,
        mode: 'cors',
        headers: {
            ...headers,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
        },
    }

    if (method !== 'get') { config.body = data }

    let res = await fetch(url, {
        ...config
    });
    return res
}

provide('api', call)

</script>

<template>
    <slot />
</template>


