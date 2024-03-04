<script setup>
import { computed, ref } from 'vue'
import { usePage, router } from '@inertiajs/vue3'

import { useStyleStore } from '@/Stores/style.js'
import Navbar from '@/Components/Landing/Navbar.vue';
// const canLogin = computed(() => usePage().props)
let canlogin = computed(() => usePage().props.canLogin)
// console.log('ca',caogin)
// console.log(caogin==true)
const styleStore = useStyleStore()
</script>

<template>
    <div>
        <Navbar :canLogin="canlogin" />
        <slot />
    </div>
</template>
