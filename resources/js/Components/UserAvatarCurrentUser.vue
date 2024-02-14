<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import UserAvatar from '@/Components/UserAvatar.vue'

const userName = computed(() => usePage().props.auth.user.name)
const img = computed(() => usePage().props.auth.user.img)
</script>

<template>
  <UserAvatar
    :img="img"
    :username="userName"
    api="initials"
  />
</template>
