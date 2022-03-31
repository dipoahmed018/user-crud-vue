<script setup>
    const props = defineProps(['value', 'change'])
</script>
<template>
    <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>

        <input
            type="password"
            name="password"
            :value="props.value"
            @keyup="props.change"
            @change="props.change"
            class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
        />
    </div>
</template>