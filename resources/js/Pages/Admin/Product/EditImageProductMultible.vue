<template>
    <div>
      <Head title="Edit Product Images" />
      <LayoutAuthenticated>
        <template #header>
          <h2 class="text-xl font-semibold leading-tight text-gray-800">
            Edit Product Images
          </h2>
        </template>

        <div class="py-12">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <div class="p-6 bg-white border-b border-gray-200">
                <div class="grid grid-cols-3 gap-4">
                  <div  v-for="(image, index) in product.image_product" :key="index" class="relative">
                    <img :src="image.image_path" class="w-full h-auto rounded-lg cursor-pointer" @click="openImageModal(index)" />
                    <div class="absolute top-2 right-2">
                      <div @click="removeImage(index)" class="px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none">
                        <i class="fas fa-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAuthenticated>

      <!-- Image Modal Component -->
      <ModalImage v-if="modalOpen" :imageUrl="modalImageUrl" @close="modalOpen = false" />
    </div>
  </template>

<script>
import { ref } from 'vue'; // Import ref from Vue
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import { Head } from "@inertiajs/vue3";
import ModalImage from "@/Components/Admin/ModalImage.vue";

export default {
  components: {
    LayoutAuthenticated,
    Head,
    ModalImage,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const modalOpen = ref(false);
    const modalImageUrl = ref("");

    const removeImage = (index) => {
      // Implement image removal logic here
    };
// console.log(props.product.image_product[0].image_path)
    const openImageModal = (index) => {
      modalImageUrl.value = props.product.image_product[index].image_product;
      modalOpen.value = true;
    };

    return { modalOpen, modalImageUrl, removeImage, openImageModal };
  },
};
</script>


  <style>
  </style>
