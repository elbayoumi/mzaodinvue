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
        <footer>
            <section class="bg-footer-end text-center">
                <p>جميع الحقوق محفوظة : بموجب براءة اختراع فكرية في الهيئة السعودية للملكية الفكرية رقم 103864100003
                    بتاريخ 2023/11/17, ردمك 3-85-12-7963-971.</p>
            </section>
        </footer>
    </div>
</template>
