<template>
    <div class="progress-bar block w-full bg-gray-100 h-2.5">
        <div class="bg-gray-500 h-2.5" :style="style"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    progress: Number
});

const style = computed(() => {
    return `width: ${props.progress}%`;
});
</script>