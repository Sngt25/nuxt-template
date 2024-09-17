<template>
  <div class="relative flex items-center justify-center  overflow-hidden bg-black py-24 sm:py-32 text-center">
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true"></div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-center justify-center ">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-primary-custom-green">About Us</p>

    <h1 class="text-white text-6xl font-bold leading-6rem tracking-tighter">
      <span class="text-stroke">WORK</span> WITH US
    </h1>
    <p class="mt-6 leading-6 text-gray-300">
      At Camalig Gym, we strive to assist you in reaching your fitness goals. With high-end equipment along with dedicated fitness trainers who not only focus on physical training but also mental well-being. A perfect place to start or progress in your fitness journey. Whether you're a beginner or an experienced athlete, we're here to guide you every step of the way.
    </p>
  </div>
</div>

      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none ">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <a v-for="link in links" :key="link.name" :href="link.href">
            {{ link.name }} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-14 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse mx-12">
            <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="absolute bottom-10 right-0 h-80 w-80 bg-radial-custom  "></div>
    <div class="absolute top-10 left-0 h-80 w-80 bg-radial-custom "></div>
  </div>

</template>

<script setup>
const stats = [
  { name: 'Branches', value: '2' },
  { name: 'Profesional Trainers', value: '20+' },
  { name: 'Open Daily', value: '7am - 10pm' },
  { name: 'Membership Plan', value: 'Flexible' },
]
</script>

<style scoped>
.text-stroke {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #ffffff;
}
</style>
