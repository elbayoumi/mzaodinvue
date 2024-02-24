<template>
    <div>
      <Head title="Dashboard" />
      <LayoutAuthenticated>
        <template #header>
          <h2 class="text-xl font-semibold leading-tight text-gray-800">
            Image Upload
          </h2>
        </template>

        <div class="py-12">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <div class="p-6 bg-white border-b border-gray-200">
                <form @submit.prevent="submit">
                  <div class="mb-6">
                    <label for="File" class="text-black">Images Upload</label>
                    <input
                      required
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
                  </div>

                  <div v-if="images.length === 0" class="mb-6 text-red-500">No images uploaded yet.</div>

                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="(image, index) in images" :key="index" class="relative">
                      <img
                        :src="image.url"
                        class="w-full h-auto rounded-lg cursor-pointer"
                        @click="openImageModal(index)"
                      />
                      <div class="absolute top-2 right-2">
                        <div @click="removeImage(index)" class="px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none">
                          <i class="fas fa-trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="errors.image" class="mt-4 font-bold text-red-600">{{ errors.image }}</div>

                  <div class="flex justify-center mt-6">
                    <button
                      type="submit"
                      class="
                        px-6
                        py-2
                        text-white
                        bg-gray-900
                        rounded
                        hover:bg-gray-800
                        focus:outline-none
                      "
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </LayoutAuthenticated>

      <!-- Image Modal Component -->
      <ModalImage v-if="modalOpen.value" :imageUrl="modalImageUrl.value" @close="modalOpen.value = false" />
    </div>
  </template>

  <script>
  import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
  import { Head, useForm } from "@inertiajs/vue3";
  import { ref } from "vue"; // Import ref from vue
  import ModalImage from "@/Components/Admin/ModalImage.vue";

  export default {
    components: {
      LayoutAuthenticated,
      Head,
      ModalImage,
    },
    props: {
      errors: Object,
      productId: {
        type: String, // تحديد نوع الـ prop ليكون String
      },
    },

    setup(props) {
      const form = useForm({
        image: [],
      });
      const images = ref([]);
      const modalOpen = ref(false);
  const modalImageUrl = ref("");
      const previewImages = (e) => {
        images.value = [];

        Array.from(e.target.files).forEach((file) => {
          images.value.push({ url: URL.createObjectURL(file) });
          form.image.push(file);
        });
      };

      const submit = () => {
        const files = Array.from(images);

        files.forEach((file) => {
          form.image.push(file);
        });

        form.post(route("admin.image.store", props.productId));
      };

      const removeImage = (index) => {
        images.value.splice(index, 1);
        form.image.splice(index, 1);
      };

      const openImageModal = (index) => {
        modalImageUrl.value = images.value[index].url;
    modalOpen.value = true;
    console.log(modalImageUrl.value);

      };

      return { form, images, modalImageUrl,modalOpen,previewImages, submit, removeImage, openImageModal };
    },
  };
  </script>

  <style>
  </style>
