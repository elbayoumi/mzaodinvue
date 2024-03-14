<script setup>
// import { Head, Link } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
// import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import WebSite from '@/Layouts/WebSite.vue'
import Navbar from '@/Components/Landing/Navbar.vue';
import Layout from "@/Layouts/Layout.vue"

// const props = defineProps({
//     products: {
//         type: Object,
//         default: () => ({}),
//     },
//     canLogin: {
//         type: Boolean,
//     },
//     canRegister: {
//         type: Boolean,
//     },
//     laravelVersion: {
//         type: String,
//         required: true,
//     },
//     asset: {
//         type: String,
//         required: true,
//     },
//     phpVersion: {
//         type: String,
//         required: true,
//     },
//     status: {
//         type: String,
//     },
//     canResetPassword: {
//         type: Boolean,
//     },

// });

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),

    });
    const loginSuccessful = true;

    if (loginSuccessful) {
        // Close the modal using jQuery
        $('#loginModal').modal('hide');
    }
};
// console.log('daaaata',props.products.data[0]['image_product'])
// product.image_product[0].image_path
</script>

<template>
    <!-- <WebSite :canLogin="canLogin"> -->

    <Head title="Settings" />
    <Layout>
        <!-- <Navbar :canLogin="canLogin" /> -->


        <div class="container mx-auto">
            <div class=" mt-5 main">

                <div class="flex flex-wrap text-end">
                    <div class="w-full  p-4">
                        <div class="bg-white relative rounded-md overflow-hidden shadow-md">
                            <div class="card-img-info flex justify-end p-2 w-100">


                            </div>
                            <div class="md:w-1/2 lg:w-1/3 m-auto rounded">
                                <figure>
                                    <img src="http://127.0.0.1:8000/website/download.jpeg"
                                        class="rounded-full w-full h-48 object-cover" alt="Card Image">
                                </figure>
                            </div>

                            <div class="card-body p-4">
                                <div class="card-h mb-3 flex justify-center">
                                    <h5 class="card-title text-success">جوال ايفون 14 برو مكس</h5>
                                </div>
                                <div class="card-b mb-3 flex justify-end">
                                    <input type="text" class="card-input rounded">
                                    <p class="w-48">مبلغ ترسية المزاد</p>
                                </div>
                                <div class="card-b mb-3 flex justify-end">
                                    <input type="text" class="card-input rounded">
                                    <p class="w-48">المزاود</p>
                                </div>
                                <div class="card-h mb-3 flex justify-between">
                                    <button class="btn card-btn-info">لوحة المزايدة</button>
                                    <button class="btn card-btn-info">زاود</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- Repeat similar structure for other columns -->

                </div>

            </div>

        </div>



    </Layout>

    <!-- </WebSite> -->
</template>
