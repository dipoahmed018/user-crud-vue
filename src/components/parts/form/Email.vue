<script setup>
    const props = defineProps(['text', 'change'])
</script>
<template>
    <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>

        <input
            type="email"
            name="email"
            :value="props.value"
            @keyup="props.change"
            @change="props.change"
            class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
        />
    </div>
</template>