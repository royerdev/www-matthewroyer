<template>
    <span
      class="text-sm font-medium cursor-pointer flex gap-1 items-center text-gray-500 dark:text-gray-400"
      @click="toggle"
    >
      <template v-if="!expanded">
        {{ moreText }}
        <BaseChevron direction="down" />
      </template>
      <template v-else>
        Show less
        <BaseChevron direction="up" />
      </template>
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    count: {
        type: Number,
        required: true,
    },
    expanded: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['toggle', 'open', 'close'])

const expanded = ref(props.expanded)

const moreText = computed(() => {
    return ['Show', props.count, 'more'].join(' ')
})

const toggle = () => {
    expanded.value = !expanded.value

    emit('toggle', expanded.value)

    if (expanded.value) {
        emit('open')
    } else {
        emit('close')
    }
}
</script>
