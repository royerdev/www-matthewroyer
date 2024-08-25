<template>
  <BaseSection centered class="bg-blue-950 text-white">
    <BaseSkill
      v-for="(skill, i) in skills"
      :key="i"
      v-bind="skill"
    />
  </BaseSection>
</template>

<script setup lang="ts">
const { data: skills } = await useFetch('/api/skills', {
  transform: data => data.skills || [],
})
</script>
