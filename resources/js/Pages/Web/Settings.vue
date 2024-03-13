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



            </div>

        </div>



    </Layout>

    <!-- </WebSite> -->
</template>
