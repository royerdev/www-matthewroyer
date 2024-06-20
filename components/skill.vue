<template>
    <div class="skill max-w-52 p-4 text-center flex flex-1 flex-col justify-center items-center">
        <LinkedInBadge v-if="badge" />
        <p class="name mb-2">{{ name }}</p>
        <ProgressBar :progress="progress" />
    </div>
</template>

<script setup land="ts">
const props = defineProps({
    name: String,
    progress: Number,
    badge: Boolean
});
</script>

<style lang="scss">
.progress {
    display: block;

    $i: 5;
    @while $i <= 100 {
        &[percentage="#{$i}"]:after {
            right: calc((100 - $i) / 100);
        }
        $i: $i + 5;
    }
}
</style>