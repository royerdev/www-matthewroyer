<template>
  <div class="flex flex-col items-center">
    <div class="flex justify-center items-center w-20 h-20 rounded-full border-[5px] border-green-500 text-3xl font-bold text-green-500">
      {{ score }}
    </div>
    <div class="mt-4 text-white font-semibold">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  score: Number,
})
</script>
