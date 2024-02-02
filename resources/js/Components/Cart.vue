<template>
    <figure>
      <img :src="imageUrl" class="d-block w-100 m-auto" alt="Image Alt Text">
    </figure>
  </template>

  <script>
  export default {
    props: ['imagePath'], // تحديد الخاصية كمسار للصورة
    data() {
      return {
        imageUrl: 'http://127.0.0.1:8000/website/cart-btn.png', // استخدام المسار الممرر أو الافتراضي
      };
    },
  };
  </script>
