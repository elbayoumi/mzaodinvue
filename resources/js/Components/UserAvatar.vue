<script setup>
import { computed } from 'vue'

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: null
  },
  img: {
    type: String,
    default: null
  },
  api: {
    type: String,
    default: 'avataaars'
  }
})

const avatar = computed(
  () => props.avatar ?? `https://api.dicebear.com/7.x/${props.api}/svg?seed=${props.username.replace(/[^a-z0-9]+/i, '-')}`
)

const username = computed(() => props.username)
const img = computed(() => props.img)
console.log('imggg',props.img)
</script>

<template>
  <div>
    <img
      :src="img"
      :alt="username"
      class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
    >
  </div>
</template>
