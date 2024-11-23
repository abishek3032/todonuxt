<script setup lang="ts">
    import type { NuxtError } from '#app';
    const props = defineProps({
        error:Object as ()=>NuxtError
    })
</script>
<template>
    <div>
        <h2>Error</h2>
        <p>{{ error }}</p>
        <button @click="$router.push('/')">clear</button>
    </div>
</template>