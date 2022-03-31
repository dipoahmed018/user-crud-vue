<script setup>
    const props = defineProps(['text'])
    console.log(props.text)
</script>
<template>
    <button class="w-full p-3 mt-4 bg-indigo-500 text-white rounded shadow">{{props.text}}</button>
</template>