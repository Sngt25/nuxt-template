<script lang="ts" setup>
const logoUrl = defineProps({
  logoUrl: { type: String, required: true },
});

defineComponent({
  name: 'IcSharpFacebook',
  name: 'MdiInstagram',
  name: 'HugeiconsTwitter',


});
</script>

<template>
  <footer class=" order-last text-white max-w-screen-xl mx-auto">
    <div class="container flex flex-wrap gap-12 my-24 md:gap-24">
      <div class="mr-auto">
        <NuxtLink to="/">
  <div class="flex items-center gap-2 pb-3">
    <img v-if="true" src="/public/Logo2.png" alt="Logo" class="object-contain h-10" />
    <span class="text-lg font-bold">CFG</span>
  </div>
</NuxtLink>
        <p class="mt-4 text-sm text-white text-card-text-light xl:max-w-md tracking-wider">
          Take the first step towards a healthier, <br>
          stronger you with our unbeatable pricing plans. <br>
          Let's sweat, achieve, and conquer together!
        </p>
        <!-- facebook -->
        <div class="flex gap-5 mt-5">
  <!-- Facebook -->
   
  <div class="border border-primary-custom-green lg:rounded-full p-2 outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#2e952e]">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#89f336" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
  </svg>
</div>


  <!-- Instagram -->

  <!-- Instagram Icon -->
<div class="border border-primary-custom-green lg:rounded-full p-2 outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#2e952e]">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#89f336" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
  </svg>
</div>

<!-- Twitter Icon -->
<div class="border border-primary-custom-green lg:rounded-full p-2 outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#2e952e]">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#89f336" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="currentColor" />
  </svg>
</div>

</div>

  
        <LangSwitcher class="mt-8" />
      </div>
      <div class="w-3/7 lg:w-auto">
  <div class="mb-1 font-semibold mb-5">Company</div>
  <div class="text-sm text-card-text-light">
    <a 
      class="py-1.5 block hover:text-gray-500 "
      href="https://github.com/sngtyzen/woonuxt?tab=readme-ov-file#next-generation-front-end-for-woocommerce"
      target="_blank">Business</a>
    <a href="/" class="py-1.5 block hover:text-gray-500 ">Franchise</a>
    <a href="/" class="py-1.5 block hover:text-gray-500 ">Partnership</a>
  </div>
</div>

<div class="w-3/7 lg:w-auto">
  <div class="mb-1 font-bold mb-5">About Us</div>
  <div class="text-sm text-card-text-light">

    <NuxtLink
      to="/products"
      class="py-1.5 block hover:text-gray-500 ">Blogs</NuxtLink>
    <NuxtLink
      to="/products?filter=sale[true]"
      class="py-1.5 block hover:text-gray-500 ">Security</NuxtLink>
    <NuxtLink
      to="/products?orderby=rating&order=ASC&filter=rating[1]"
      class="py-1.5 block hover:text-gray-500 ">Career</NuxtLink>
  </div>
</div>

<div class="w-3/7 lg:w-auto">
  <div class="mb-1 font-bold mb-5">Contacts</div>
  <div class="text-sm text-card-text-light">

    <NuxtLink
      to="/contact"
      class="py-1.5 block hover:text-gray-500 ">Contact Us</NuxtLink>
    <a href="/" class="py-1.5 block hover:text-gray-500 ">Privacy Policy</a>
    <a href="/" class="py-1.5 block hover:text-gray-500 ">Terms & Conditions</a>
  </div>
  
</div>
</div>

   
  </footer>
</template>

<style scoped></style>