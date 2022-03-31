<script setup>
    const props = defineProps(['text'])
</script>
<template>
    <button type="submit" class="w-full p-3 mt-4 bg-indigo-800 text-white rounded shadow">{{props.text}}</button>
</template>