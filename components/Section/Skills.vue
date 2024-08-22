<template>
  <BaseSection centered class="bg-blue-950 text-white">
    <BaseSkill
      v-for="skill in skills"
      :key="skill.name"
      :name="skill.name"
      :progress="skill.level"
      :badge="skill.badge"
    />
  </BaseSection>
</template>

<script setup lang="ts">
const { data: skills } = useFetch('/api/skills', {
  transform: data => data.skills,
})
</script>
