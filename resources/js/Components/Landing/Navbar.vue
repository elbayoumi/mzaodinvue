<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Logo from '@/Components/Logo.vue';
import Cart from '@/Components/Cart.vue';


defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    asset: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    canResetPassword: {
        type: Boolean,
    },

    canResetPassword: {
        type: Boolean,
    },

});




</script>

<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">

                <section v-if="canLogin" class="flex">
                    <Link v-if="$page.props.auth.user" :href="route('admin.dashboard')"
                        class=" btn-main text-white font-bold py-3  px-4 rounded lg:block hidden h-100 text-center">
                    Dashboard</Link>
                    <template v-else>

                        <Link class=" btn-main text-white font-bold py-3  px-4 rounded lg:block hidden h-100 text-center"
                            :href="route('login')">
                        تسجيل الدخول

                        </Link>
                    </template>
                    <!-- <Link
                    :href="route('login')"
                    class="login navbar-brand btn btn-main text-white d-none d-lg-block"
                    >تسجيل الدخول</Link
                > -->
                    <Cart class="w-20 flex cart d-inline-block" />
                    <Logo class=" logo max-w-full lg:hidden block   " />

                </section>
                <div class="flex">




                </div>


                <button
                    class="main-text-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" v-on:click="toggleNavbar()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <Logo class=" logo max-w-full lg:block hidden  lg:ml-20" />

            <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">

                <ul class="flex flex-col lg:flex-row list-none ml-auto">

                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            href="#pablo">
                            <i class="fas fa-users text-lg leading-lg main-text-color opacity-75" /><span class="ml-2">من
                                نحن</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            href="#pablo">
                            <i class="fas fa-question-circle text-lg leading-lg main-text-color opacity-75" /><span
                                class="ml-2">الاسئلة الشائعة</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            href="#pablo">
                            <i class="fas fa-gavel text-lg leading-lg main-text-color opacity-75" /><span
                                class="ml-2">المزادات</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            href="#pablo">
                            <i class="fas fa-home text-lg leading-lg main-text-color opacity-75" /><span
                                class="ml-2">الرئيسية</span>
                        </a>
                    </li>
                    <li v-if="canLogin" class="nav-item block my-5 lg:hidden">
                        <Link v-if="$page.props.auth.user" :href="route('admin.dashboard')"
                            class=" btn-main text-white font-bold py-3  px-4 rounded  h-100 text-center">
                        Dashboard</Link>
                        <template v-else>

                            <Link class=" btn-main text-white font-bold py-3  px-4 rounded  h-100 text-center"
                                :href="route('login')">
                            تسجيل الدخول

                            </Link>
                        </template>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "red-navbar",
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        }
    },

}

</script>
