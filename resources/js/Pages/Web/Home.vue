<script setup>
// import { Head, Link } from '@inertiajs/vue3';
import Checkbox from "@/Components/Checkbox.vue";
// import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import carddat from "../Web/fakers/cardData";
import twodata from "../Web/fakers/cardTwo";
import dataswiper from "../Web/fakers/dataswiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import WebSite from "@/Layouts/WebSite.vue";
import Navbar from "@/Components/Landing/Navbar.vue";
import Layout from "@/Layouts/Layout.vue";
import { ref } from "vue";

const props = defineProps({
    products: {
        type: Object,
        default: () => ({}),
    },
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
});
const activeTab = ref("tab1");

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
    const loginSuccessful = true;

    if (loginSuccessful) {
        // Close the modal using jQuery
        $("#loginModal").modal("hide");
    }
};
console.log("as", props.products.data);
// console.log('daaaata',props.products.data[0]['image_product'])
// product.image_product[0].image_path
</script>

<template>
    <!-- <WebSite :canLogin="canLogin"> -->

    <Head title="Home" />
    <Layout>
        <!-- <Navbar :canLogin="canLogin" /> -->

        <div class="container mx-auto">
            <div class="mt-5 main">
                <!-- Your content goes here -->

                <main class="rounded justify-end sm:flex-row p-5 items-center">
                    <p class="text-4xl font-bold text-end my-3">المزادات</p>

                    <ul class="list-none flex flex-nowrap justify-end">
                        <li>
                            <a class="main-text-color" href="#">منتهى +99 </a>
                        </li>
                        <li>
                            <a class="main-text-color" href="#">قادم 10</a>
                        </li>
                        <li>
                            <a class="main-text-color" href="#">جاري 4</a>
                        </li>
                        <li>
                            <a class="main-text-color" href="#">الكل 14</a>
                        </li>
                    </ul>
                </main>
            </div>
            <div class="my-3">
                <div class="row flex justify-end p-3 sort-icons">
                    <i
                        @click="activeTab = 'tab1'"
                        class="fa-solid fa-bars m-2 cursor-pointer"
                    ></i>
                    <i
                        @click="activeTab = 'tab2'"
                        class="fa-solid fa-table-cells m-2 cursor-pointer"
                    ></i>
                    <!-- <figure class="p-3">
                    <img :src="assetPath(asset,"menu-burger.png")" class="sort-icon" alt="Card Image">

                </figure>
                <figure class="p-3">
                    <img :src="assetPath(asset,"dots-menu-svgrepo-com.svg" class="sort-icon" alt="Card Image">
                </figure> -->
                </div>
            </div>

            <div class="flex flex-wrap text-end">
                <div
                    class="w-full md:w-1/2 lg:w-1/3 p-4"
                    v-for="dat in props.products.data"
                    :key="dat.id"
                    v-if="activeTab === 'tab1'"
                >
                    <div
                        class="bg-white relative rounded-md overflow-hidden shadow-md"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn btn-dis">
                                <i class="fa-solid fa-eye"></i> عرض
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>
                        <swiper
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :grabCursor="true"
                            :effect="'creative'"
                            :creativeEffect="{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },

                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }"
                            :modules="modules"
                            class="mySwiper"
                        >
                            <swiper-slide
                                v-for="sw in dat['image_product']"
                                :key="sw.id"
                                ><img
                                    :src="sw.image_path"
                                    class="w-full h-48 object-cover"
                                    :alt="sw.alt"
                                />
                            </swiper-slide>
                        </swiper>

                        <div class="rounded card-pop p-2">
                            <div>انتهى المزاد</div>
                        </div>
                        <div class="card-body p-4">
                            <div class="card-h mb-3 flex justify-center">
                                <h5 class="card-title text-success">
                                    جوال ايفون 14 برو ماكس
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input rounded" />
                                <p class="w-48">مبلغ تسوية المزاد</p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input rounded" />
                                <p class="w-48">المزاود</p>
                            </div>
                            <div class="card-h mb-3 flex justify-between">
                                <button class="btn card-btn-info">
                                    لوحة المزايدة
                                </button>
                                <button class="btn card-btn-info">زاود</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <div
                    class="w-full mb-4 flex justify-center"
                    v-for="dat in twodata"
                    :key="dat.id"
                    v-if="activeTab === 'tab2'"
                >
                    <div style="width:100%"
                        class=" bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black md:w-fit p-2"
                    >
                        <div
                            class="flex justify-between flex-wrap items-center p-2"
                        >
                            <div class="btn-detilas">
                                <button
                                    class="text-white bg-pink-600 rounded-md px-4 py-2"
                                >
                                    {{ dat.detilas }}
                                </button>
                            </div>
                            <span class="text-green-700">{{ dat.phone }}</span>
                            <div class="flex">
                                <div
                                    class="flex items-center btn btn-dis py-0 h-10 cursor-pointer"
                                >
                                    <i class="fa-solid fa-eye"></i>عرض
                                </div>
                                <div class="img-phone w-14 p-1 hidden sm:inline-block">
                                    <img
                                       style="width: 100%;"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwbxr_yufRwgzTWODR9-bOANUgXW14hae8TiNcRrpoQ&s"
                                        alt=""
                                    />
                                </div>
                                <i
                                    class="fa-solid fa-star star hidden sm:inline-block"
                                ></i>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center md:flex-row  items-center p-2 gap-7"
                        >
                            <div class="inputs flex justify-between gap-6">
                                <div class="flex items-center gap-3">
                                    <input
                                        type="text"
                                        class="px-2 w-full md:w-32 h-5 rounded-md"
                                    />
                                    <p class="text-black text-nowrap">
                                        {{ dat.plus }}
                                    </p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <input
                                        type="text"
                                        class="px-2 w-full md:w-32 h-5 rounded-md"
                                    />
                                    <p class="text-black text-nowrap">
                                        {{ dat.cost }}
                                    </p>
                                </div>
                                <div
                                    class="border-2 px-2 w-full md:w-36 py-2 border-black rounded-md"
                                >
                                    <p class="text-black text-center">
                                        {{ dat.finsh }}
                                    </p>
                                </div>
                            </div>
                            <!-- <div class="w-full md:w-32 h-24">
                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JqJi9owFQy_udNwQcHDxlFsYFy2TURyP3L-4NJarRg&s" alt="" />
                </div> -->
                        </div>
                        <div class="btn-end flex justify-start p-2">
                            <button
                                class="text-white bg-pink-600 rounded-md ms-2 px-8 w-full md:w-48 py-1"
                            >
                                {{ dat.over }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-5 flex justify-end flex-col text-end">
                <p class="text-3xl font-semibold my-1">زاود : وكن الفائز</p>
                <p class="text-xl font-semibold mb-4 text-right text-secondary">
                    خطوات المشاركة والفوز
                </p>

                <ul
                    class="list-unstyled flex flex-wrap justify-around w-100 py-5 text-center"
                >
                    <li class="">
                        <p>......................... 3</p>
                        <a class="nav-link text-secondary" href="#">
                            المزايدة والفوز
                        </a>
                    </li>
                    <li class="">
                        <p>......................... 2</p>
                        <a class="nav-link text-secondary" href="#">
                            الاشتراك
                        </a>
                    </li>
                    <li class=" ">
                        <p>......................... 1</p>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="nav-link text-secondary"
                        >
                            التسجيل
                        </Link>
                    </li>
                </ul>
                <!-- <img :src="'https://mzaodin.com/website/log-removebg-preview.png'"
                            class="w-100 d-inline-block m-0 p-0 logo" alt=""> -->
                <!-- <ul class="list-unstyled flex flex-wrap justify-around w-100 py-5 ">
                    <li class="text-center">
                        <a class="nav-link text-secondary" href="#"> المزايدة والفوز </a>
                    </li>
                    <li class="">
                        <a class="nav-link text-secondary" href="#"> الاشتراك </a>
                    </li>
                    <li class=" ">
                        <Link v-if="canRegister" :href="route('register')" class="nav-link text-secondary"> التسجيل </Link>
                    </li>

                </ul> -->
                <ul
                    class="list-unstyled flex flex-wrap justify-around min-w-full my-5 py-5"
                >
                    <li class="text-center">
                        <a class="nav-link text-secondary" href="#"> من نحن</a>
                    </li>
                    <li class="">
                        <a class="nav-link text-secondary" href="#">
                            الروابط
                        </a>
                    </li>
                    <li class=" ">
                        <a class="nav-link text-secondary" href="#">
                            التواصل
                        </a>
                    </li>
                    <li class="text-center">
                        <img
                            :src="'https://mzaodin.com/website/log-removebg-preview.png'"
                            class="d-inline-block m-0 p-0 logo"
                            alt=""
                        />
                    </li>
                </ul>

                <div class="footer-icons flex justify-between">
                    <div class="payment">
                        <iconify-icon
                            icon="simple-icons:applepay"
                        ></iconify-icon>
                        <iconify-icon icon="logos:visa"></iconify-icon>
                        <iconify-icon icon="logos:mastercard"></iconify-icon>
                    </div>
                    <div class="social">
                        <iconify-icon
                            icon="akar-icons:linkedin-fill"
                        ></iconify-icon>
                        <iconify-icon icon="mdi:youtube"></iconify-icon>
                        <iconify-icon icon="pajamas:x"></iconify-icon>
                    </div>
                </div>
            </div>

            <!-- <figure>
            <img :src="assetPath(asset,"Screenshot from 2024-01-12 00-59-29.png")" class="card-img-top h-100 cover" alt="Card Image">

        </figure> -->
        </div>

        <!-- Link Bootstrap JS and Popper.js -->
    </Layout>

    <!-- </WebSite> -->
</template>
<style scoped>
@media (max-width: 477px) {
    .inputs {
        flex-direction: column;
    }
    .puls {
        flex-direction: column;
        gap: 10px;
    }
}
</style>
