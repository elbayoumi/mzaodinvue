<template>
    <figure>
      <img :src="imageUrl" class="w-100 d-inline-block m-0 p-0" alt="Image Alt Text">
    </figure>
  </template>

  <script>
  export default {
    props: ['imagePath'], // تحديد الخاصية كمسار للصورة
    data() {
      return {
        imageUrl: 'http://127.0.0.1:8000/website/log-removebg-preview.png', // استخدام المسار الممرر أو الافتراضي
      };
    },
  };
  </script>
