<template>
    <Head title="Dashboard" />

    <LayoutAuthenticated>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Image Create
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <div>
                                <label for="File">File Upload</label>
                                <input
    type="file"
    @change="previewImages"
    ref="photos"
    class="
        w-full
        px-4
        py-2
        mt-2
        border
        rounded-md
        focus:outline-none
        focus:ring-1
        focus:ring-blue-600
    "
    multiple
/>

                                <div v-for="(image, index) in images" :key="index">
                                    <img :src="image.url" class="w-full mt-4 h-80" />
                                </div>
                                <div v-if="errors.image" class="font-bold text-red-600">
                                    {{ errors.image }}
                                </div>
                            </div>

                            <div class="flex items-center mt-4">
                                <button class="
                                        px-6
                                        py-2
                                        text-white
                                        bg-gray-900
                                        rounded
                                    ">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import { Head, Link, useForm } from "@inertiajs/vue3"
import { ref } from 'vue'; // Import ref from vue

export default {
    components: {
        LayoutAuthenticated,
        Head,
    },
    props: {
        errors: Object,
    },
    setup(props) {
        const form = useForm({
            image: [],
        });
        const images = ref([]);

        const previewImages = (e) => {
            images.value = [];

            Array.from(e.target.files).forEach(file => {
                images.value.push({ url: URL.createObjectURL(file) });
                form.image.push(file);
            });
        };

        const submit = () => {
            const files = Array.from(images);

            files.forEach(file => {
                form.image.push(file);
            });

            form.post(route("admin.image.store"));
        };

        const previewImage = (e) => {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        };

        return { form, images, previewImages, submit, previewImage };
    }
};
// console.log(productId);
</script>
