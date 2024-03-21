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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WebSite from "@/Layouts/WebSite.vue";
import Navbar from "@/Components/Landing/Navbar.vue";
import Layout from "@/Layouts/Layout.vue";
import { ref, onMounted } from "vue";

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
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
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
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const updateTime = () => {
        const now = new Date();
        const futureDate = new Date("2024-03-21T00:00:00");

        const difference = futureDate - now;

        days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours.value = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes.value = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
    };

    onMounted(() => {
        updateTime();
        setInterval(updateTime, 1000);
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

                    <ul
                        class="list-none flex flex-nowrap justify-end text-pink-600"
                    >
                        <li>
                            <a
                                @click="activeTab = 'tab3'"
                                :class="{
                                    'main-text-color': activeTab === 'tab3',
                                    active: activeTab === 'tab3',
                                }"
                                href="#"
                                >منتهى +99
                            </a>
                        </li>
                        <li>
                            <a
                                @click="activeTab = 'tab1'"
                                :class="{
                                    'main-text-color': activeTab === 'tab1',
                                    active: activeTab === 'tab1',
                                }"
                                href="#"
                                >قادم 10</a
                            >
                        </li>
                        <li>
                            <a
                                @click="activeTab = 'tab2'"
                                :class="{
                                    'main-text-color': activeTab === 'tab2',
                                    active: activeTab === 'tab2',
                                }"
                                href="#"
                                >جاري 4</a
                            >
                        </li>
                        <li>
                            <a class="main-text-color" href="#">الكل 14</a>
                        </li>
                    </ul>
                </main>
            </div>
            <div class="my-3">
                <div class="row flex justify-end p-3 sort-icons">
                    <!-- <i
                        class="fa-solid fa-bars m-2 cursor-pointer"
                    ></i>
                    <i

                        class="fa-solid fa-table-cells m-2 cursor-pointer"
                    ></i> -->
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
                        class="bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn card-btn-info rounded-md">
                                <i class="fa-solid fa-eye"></i> التفاصيل
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>
                        <swiper
                            :spaceBetween="30"
                            :centeredSlides="true"
                            :autoplay="{
                                delay: 1000,
                                disableOnInteraction: false,
                            }"
                            :pagination="{
                                clickable: true,
                            }"
                            :navigation="true"
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

                        <div class="card-body p-4">
                            <div
                                class="card-h mb-3 flex justify-center flex-col"
                            >
                                <h5
                                    class="card-titl text-green-700 text-success font-semibold"
                                >
                                    جوال ايفون 14 برو ماكس
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input" />
                                <p class="w-40 font-semibold">
                                    السعر التقديرى للمنتج
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input rounded" />
                                <p class="w-40 font-semibold">مبلغ التسجيل</p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input rounded" />
                                <p class="w-40 font-semibold">
                                    الباقى من المشتركين للبدء
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input" />
                                <p class="w-40 font-semibold">
                                    الحد الادنى للتزايد
                                </p>
                            </div>
                            <div class="card-h mb-3 flex justify-between">
                                <Link :href="route('Contrdashdone',dat.id)">
                                    <button class="btn card-btn-info">
                                        التسجيل فى المزاد
                                    </button>
                                </Link>
                            </div>
                            <div
                                class="flex justify-between flex-1 items-center"
                            >
                                <div class="flex flex-col text-[22px]">
                                    <p class="text-center font-semibold mb-3">
                                        شارك المنتج
                                    </p>
                                    <div class="flex gap-3 cursor-pointer">
                                        <i
                                            class="fa-brands fa-whatsapp"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-twitter"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-solid fa-share-nodes"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-facebook-f"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-snapchat"
                                            style="color: #63e6be"
                                        ></i>
                                    </div>
                                </div>
                                <div class="flex gap-3 ms-20 flex-wrap">
                                    <button
                                        class="bg-green-600 px-4 h-7 text-white rounded-md"
                                    >
                                        اضف تقيمك
                                    </button>
                                    <p class="text-[25px] text-gray-600">
                                        التقييمات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap text-end">
                <div
                    class="w-full md:w-1/2 lg:w-1/3 p-4"
                    v-for="dat in props.products.data"
                    :key="dat.id"
                    v-if="activeTab === 'tab2'"
                >
                    <div
                        class="bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn card-btn-info rounded-md">
                                <i class="fa-solid fa-eye"></i> التفاصيل
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>

                        <swiper
                            :autoplay="{
                                delay: 1000,
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

                        <div class="card-body p-4">
                            <div Class=" relative">
                                <p
                                    class="absolute-center z-20 bg-slate-50 text-center border-2 border-black py-2 px-4 w-52 rounded-lg"
                                >
                                    جارى يتنهى بعد
                                </p>
                                <div
                                    class="flex justify-center gap-4 mt-[-80px] relative z-20"
                                >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                        >01 <br />يوم</sapn
                                    >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                        >07 <br />ساعة</sapn
                                    >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                        >54 <br />دقيقة</sapn
                                    >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                        >02 <br />ثانية</sapn
                                    >
                                </div>
                            </div>
                            <div
                                class="card-h mb-3 mt-2 text-green-700 flex justify-center flex-col"
                            >
                                <h5 class="card-titl font-semibold">
                                    جوال ايفون 14 برو ماكس
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input" />
                                <p class="w-32 font-semibold">
                                    اعلى مبلغ مزايدة
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    type="text"
                                    class="card-input rounded-lg"
                                />
                                <p class="w-32 font-semibold">المزاود</p>
                            </div>

                            <div class="card-h mb-3 flex justify-between">
                                <Link :href="route('Controlthree')">
                                    <button
                                        class="btn card-btn-info rounded-lg"
                                    >
                                        لوحة المزايدة
                                    </button>
                                </Link>
                                <Link :href="route('Controtwo')">
                                    <button
                                        class="btn card-btn-info rounded-lg"
                                    >
                                        زواد
                                    </button>
                                </Link>
                            </div>
                            <div
                                class="flex justify-between flex-1 items-center"
                            >
                                <div class="flex flex-col text-[22px]">
                                    <p class="text-center font-semibold mb-3">
                                        شارك المنتج
                                    </p>
                                    <div class="flex gap-3 cursor-pointer">
                                        <i
                                            class="fa-brands fa-whatsapp"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-twitter"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-solid fa-share-nodes"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-facebook-f"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-snapchat"
                                            style="color: #63e6be"
                                        ></i>
                                    </div>
                                </div>
                                <div class="flex gap-3 ms-20 flex-wrap">
                                    <button
                                        class="bg-green-600 px-4 h-7 text-white rounded-md"
                                    >
                                        اضف تقيمك
                                    </button>
                                    <p class="text-[25px] text-gray-600">
                                        التقييمات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap text-end">
                <div
                    class="w-full md:w-1/2 lg:w-1/3 p-4"
                    v-for="dat in props.products.data"
                    :key="dat.id"
                    v-if="activeTab === 'tab3'"
                >
                    <div
                        class="bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn card-btn-info rounded-md">
                                <i class="fa-solid fa-eye"></i> التفاصيل
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>

                        <swiper
                            :autoplay="{
                                delay: 1000,
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

                        <div class="card-body p-4">
                            <div Class=" relative">
                                <p
                                    class="absolute-center text-[35px] z-20 bg-slate-50 text-center border-2 border-black py-1 px-4 w-60 rounded-lg"
                                >
                                    انتهى المزاد
                                </p>
                            </div>
                            <div
                                class="card-h mb-3 mt-2 text-green-700 flex justify-center flex-col"
                            >
                                <h5 class="card-titl font-semibold">
                                    جوال ايفون 14 برو ماكس
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input" />
                                <p class="w-32 font-semibold">
                                    مبلغ ترسية المزاد
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    type="text"
                                    class="card-input rounded-lg"
                                />
                                <p class="w-32 font-semibold">المزاود</p>
                            </div>

                            <div class="card-h mb-3 flex justify-between">
                                <Link :href="route('Controlthree')">
                                    <button
                                        class="btn card-btn-info rounded-lg"
                                    >
                                        لوحة المزايدة
                                    </button>
                                </Link>
                            </div>
                            <div
                                class="flex justify-between flex-1 items-center"
                            >
                                <div class="flex flex-col text-[22px]">
                                    <p class="text-center font-semibold mb-3">
                                        شارك المنتج
                                    </p>
                                    <div class="flex gap-3 cursor-pointer">
                                        <i
                                            class="fa-brands fa-whatsapp"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-twitter"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-solid fa-share-nodes"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-facebook-f"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-snapchat"
                                            style="color: #63e6be"
                                        ></i>
                                    </div>
                                </div>
                                <div class="flex gap-3 ms-20 flex-wrap">
                                    <button
                                        class="bg-green-600 px-4 h-7 text-white rounded-md"
                                    >
                                        اضف تقيمك
                                    </button>
                                    <p class="text-[25px] text-gray-600">
                                        التقييمات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //pageing// -->
            <nav>
                <ul class="flex justify-center mb-4">
                    <li>
                        <a
                            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                            href="#"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                            href="#"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                            href="#"
                        >
                            3
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="m-5 flex justify-end flex-col text-end">
                <p class="text-3xl font-semibold my-1">زاود : وكن الفائز</p>
                <p class="text-xl font-semibold mb-4 text-right text-secondary">
                    خطوات المشاركة والفوز
                </p>

                <ul
                    class="list-unstyled flex flex-wrap justify-around w-100 py-5 text-center"
                >
                    <li class="">
                        <div class="w-32">
                            <img
                                class="img-fluid"
                                src="https://mzaodin.com/website/log-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <a
                            class="nav-link text-secondary text-[25px] font-semibold"
                            href="#"
                        >
                            المزايدة والفوز
                        </a>
                    </li>
                    <li class="">
                        <div class="w-32">
                            <img
                                class="img-fluid"
                                src="https://mzaodin.com/website/log-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <a
                            class="nav-link text-secondary text-[25px] font-semibold"
                            href="#"
                        >
                            الاشتراك
                        </a>
                    </li>
                    <li class=" ">
                        <div class="w-32">
                            <img
                                class="img-fluid"
                                src="https://mzaodin.com/website/log-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="nav-link text-secondary text-[25px] font-semibold"
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
                    class="list-unstyled flex flex-wrap justify-between ms-3 min-w-full"
                >
                    <li class="text-center">
                        <a
                            class="nav-link text-black text-[25px] font-semibold"
                            href="#"
                        >
                            التواصل</a
                        >
                        <p class="text-[16px] text-pink-600 font-semibold">
                            الرياض -المملكة العربية السعودية
                        </p>
                        <p class="text-[16px] text-pink-600 font-semibold">
                            تواصل معنا
                        </p>
                        <sapn class="text-[13px] text-pink-600 font-semibold"
                            >info@mazaodin.com</sapn
                        >
                    </li>
                    <li class="">
                        <a
                            class="nav-link text-black text-[25px] font-semibold"
                            href="#"
                        >
                            الروابط
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >الشروط والاحكام</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >سياسة الخصوصية</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >سياسة الاسترجاع</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >الاسئلة الشائعة</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >التقييمات</a
                                    >
                                </li>
                            </ul>
                        </a>
                    </li>
                    <li class=" ">
                        <a
                            class="nav-link text-black text-[25px] font-semibold"
                            href="#"
                        >
                            من نحن
                            <p class="text-[30px] text-pink-600 font-semibold">
                                منصة سعودية للمزادات
                            </p>
                            <p class="text-[16px] text-pink-600 font-semibold">
                                منصة تفاعلية رائدة فى تقديم المزادات الرقمية<br />
                                للعديد من من الاصول والمتنجات
                            </p>
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

                <div class="icons flex justify-between items-center flex-wrap">
                    <div class="flex gap-3 text-[25px]">
                        <i class="fa-brands fa-paypal"></i>
                        <i class="fa-solid fa-money-check-dollar"></i>
                        <i class="fa-brands fa-cc-amazon-pay"></i>
                        <i
                            class="fa-regular fa-credit-card"
                            style="color: #74c0fc"
                        ></i>
                        <i class="fa-brands fa-alipay"></i>
                    </div>
                    <div class="flex gap-3 text-[25px]">
                        <i class="fa-brands fa-x-twitter text-gray-500"></i>
                        <i class="fa-brands fa-youtube text-gray-500"></i>
                        <i class="fa-brands fa-linkedin-in text-gray-500"></i>
                        <i
                            class="fa-brands fa-square-snapchat"
                            style="color: #ffd43b"
                        ></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i
                            class="fa-brands fa-facebook"
                            style="color: #74c0fc"
                        ></i>
                    </div>
                </div>
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
    .icons {
        justify-content: center;
        gap: 10px;
    }
}

.card-img-info {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    z-index: 1000;
}
.active {
    border-bottom: 2px #c23381 solid;
}
.absolute-center {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
