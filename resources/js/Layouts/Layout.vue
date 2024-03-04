<script setup>
import { computed, ref } from 'vue'

import { useStyleStore } from '@/Stores/style.js'
import Navbar from '@/Components/Landing/Navbar.vue';

const styleStore = useStyleStore()
</script>

<template>
    <div>
        <Navbar :canLogin="canLogin" />
        <slot />
    </div>
</template>
