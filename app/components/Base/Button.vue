<template>
  <UButton
    data-testid="base-button"
    class="font-semibold transition-colors duration-200 no-underline"
    size="md"
    :external="external"
    :target="target"
  >
    <template v-if="external" #trailing>
      <UIcon name="mdi:launch" class="w-4 h-4" />
    </template>
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps({
  external: {
    type: Boolean,
    default: false,
  },
})

const target = ref('_self')

if (props.external) {
  target.value = '_blank'
}
</script>
