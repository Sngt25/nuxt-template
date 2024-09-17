<template>
    <div>
      <button type="button" class="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 border-2
       transition-colors duration-300"  id="user-menu-button" aria-expanded="false"
        aria-haspopup="true">
        <span class="absolute -inset-1.5"></span>
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="">
      </button>
    </div>

    

</template>

<script lang="ts" setup>

</script>

<style scoped>
.hover\:bg-gray-100:hover {
  background-color: #f5f5f5;
}

.rounded-full {}

.border-gray-800 {
  border-color: #2c2c2c;
  transition: border-color 0.3s ease;
}

.border-gray-800:hover {
  border-color: #ffffff;
}
</style>
