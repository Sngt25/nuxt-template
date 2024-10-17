<template>
  <div class="bg-black h-screen ">
    <div class="absolute bottom-10 right-0 h-80 w-80 bg-radial-custom "></div>
    <div class="absolute top-10 left-0 h-80 w-80 bg-radial-custom "></div>

    <nav class="max-w-screen-xl mx-auto py-8 flex items-center justify-between gap-8">
      <div class="flex items-center gap-2 w-25 h-10">
        <img src="/public/Logo2.png" alt="logo" class="h-full" />
      </div>

      <ul class="list-none flex items-center gap-16">

        <li>
          <NuxtLink to="/home" class="relative text-white flex items-center group">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8 em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
              </g>
            </svg> -->
            <p class="">Home</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#product" class="relative text-white flex items-center  group">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="m22.9 21.2l-4.1-4.1c.4-1 .2-2.3-.7-3.1c-.9-.9-2.2-1.1-3.3-.6l1.9 1.9l-1.4 1.4l-2-2c-.5 1.1-.3 2.4.6 3.4c.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M10 12c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3 14H2v-3c0-2.7 5.3-4 8-4c.5 0 1.2.1 1.9.2c-.4.5-.6 1.1-.8 1.8c-.4 0-.7-.1-1.1-.1c-3 0-6.1 1.5-6.1 2.1v1.1h7.6c.3.8.9 1.4 1.5 1.9" />
            </svg> -->
            <p>Product</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#Equipment" class="relative text-white flex items-center  group">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 48 48">
              <g fill="none" stroke="currentColor" stroke-width="4">
                <path stroke-linejoin="round"
                  d="M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0-9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m16 31l6 6l12-12" />
                <path stroke-linecap="round" d="M16 5v8m16-8v8" />
              </g>
            </svg> -->
            <p>Equipment</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#plan" class="relative text-white flex items-center  group">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z" />
            </svg> -->
            <p>Plan</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="relative text-white flex items-center group">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                color="currentColor">
                <path
                  d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172S21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828S17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172S4 17.771 4 14z" />
                <path
                  d="M9.8 11.974c-.427-.744-.633-1.351-.757-1.967c-.184-.91.237-1.8.933-2.368c.295-.24.632-.158.806.155l.393.705c.311.558.467.838.436 1.134c-.03.296-.24.537-.66 1.02zm0 0a10.36 10.36 0 0 0 3.726 3.726m0 0c.744.427 1.351.633 1.967.757c.91.184 1.8-.237 2.368-.933c.24-.295.158-.632-.155-.806l-.704-.393c-.56-.311-.839-.467-1.135-.436c-.296.03-.537.24-1.02.66zM5 6H2.5M5 12H2.5M5 18H2.5" />
              </g>
            </svg> -->
            <p>About</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="signup">
        <button
          class="py-4 px-8 text-black bg-primary-custom-green rounded-lg border-none outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#00FF00] font-semibold">
          Join Now
        </button>
      </NuxtLink>
    </nav>

    <!-- Header Section -->

    <header class="relative py-14 max-w-screen-xl mx-auto mt-5 ">
      <div class="flex flex-col md:flex-row items-center gap-5 ">
        <div class="header__content flex-1 relative">
          <h4 class="text-primary-custom-green text-1rem font-semibold mb-4">BEST FITNESS IN THE TOWN</h4>
          <h1 class="text-white text-8xl font-bold leading-6rem mb-4 tracking-tight">
            <span class="text-stroke ">MAKE</span> YOUR BODY SHAPE
          </h1>
          <p class="text-white mb-8">
            Unleash your potential and embark on a journey towards a stronger,
            <br>fitter, and more confident you. Sign up for
            'Make Your Body Shape' now <br>
            and witness the incredible transformation your body is capable of!
          </p>
          <NuxtLink to="/signup">
            <button
              class="mt-5 py-4 px-8 text-black bg-primary-custom-green rounded-lg border-none outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#00FF00] font-semibold">
              Get Started
            </button>
          </NuxtLink>
          <p
            class="absolute bottom-[-10%] right-[-43%] text-white text-9xl z-0 opacity-10 font-bold outline-text tracking-wider">
            FITNESS
          </p>
        </div>
        <div class="relative flex-1">
          <!-- The image -->
          <img src="/public/header3-nobg.png" alt="header" class="w-full h-auto max-w-xs mx-auto relative z-10" />

          <!-- The text behind the image -->
          <span class="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none"
            style="top: 35%; left: 50%; transform: translate(-50%, -50%);">
            <p class="text-primary-custom-green text-9xl font-bold" style="font-size: calc(400vw / 10);">
              O
            </p>
          </span>

        </div>
      </div>
    </header>

  </div>

  <!-- Explore Section -->
  <div class="bg-black block-element">
    <section class="max-w-screen-xl mx-auto py-11 gap-8 ">
      <div class="text-white text-center mx-10">
        <p class="text-primary-custom-green mb-2 ">Why Choose Us?</p>
        <h1 class="text-white text-6xl font-bold leading-tight mb-10 tracking-tighter">

          <span class="text-stroke">FUEL YOUR</span> AMBITION
          <br>
          <span class="text-stroke">AND IGNITE</span> YOUR PASSION
        </h1>
      </div>

      <div class="mt-16 grid grid-cols-4 gap-8">
        <!-- Strength Icon (Dumbbell Icon) -->
        <NuxtLink to="/signup" class="block">
  <div class="p-4 bg-slate-900 border-2 border-transparent rounded-lg transition duration-300 hover:bg-primary-extra-light hover:border-secondary group">
    <span class="inline-block p-2 mb-4 text-3xl text-black bg-primary-custom-green rounded">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
        <g fill="none">
          <path
            d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14" />
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2"
            stroke-width="5"
            d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14m2.44 3.13L22 34" />
        </g>
      </svg>
    </span>
    <h4 class="mb-2 text-xl font-bold text-white">Strength</h4>
    <p class="mb-4 text-text-light text-white">
      Embrace the essence of strength as we delve into its various dimensions: physical, mental, and emotional.
    </p>
    <a href="#"
      class="inline-flex items-center font-semibold text-white transition-all duration-300 group-hover:text-secondary-color">
      Join Now
      <ArrowLongRightIcon
        class="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  </div>
</NuxtLink>

<NuxtLink to="/signup" class="block">
  <div class="p-4 bg-slate-900 border-2 border-transparent rounded-lg transition duration-300 hover:bg-primary-extra-light hover:border-secondary group">
    <span class="inline-block p-2 mb-4 text-3xl text-black bg-primary-custom-green rounded">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M244 116V88a20 20 0 0 0-20-20h-16v-4a20 20 0 0 0-20-20h-24a20 20 0 0 0-20 20v52h-32V64a20 20 0 0 0-20-20H68a20 20 0 0 0-20 20v4H32a20 20 0 0 0-20 20v28a12 12 0 0 0 0 24v28a20 20 0 0 0 20 20h16v4a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-52h32v52a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-4h16a20 20 0 0 0 20-20v-28a12 12 0 0 0 0-24M36 164V92h12v72Zm52 24H72V68h16Zm96 0h-16V68h16Zm36-24h-12V92h12Z" />
      </svg>
    </span>
    <h4 class="mb-2 text-xl font-bold text-white">Physical Fitness</h4>
    <p class="mb-4 text-text-light text-white">
      It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.
    </p>
    <a href="#"
      class="inline-flex items-center font-semibold text-white transition-all duration-300 group-hover:text-secondary-color">
      Join Now
      <ArrowLongRightIcon
        class="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  </div>
</NuxtLink>

<NuxtLink to="/signup" class="block">
  <div class="p-4 bg-slate-900 border-2 border-transparent rounded-lg transition duration-300 hover:bg-primary-extra-light hover:border-secondary group">
    <span class="inline-block p-2 mb-4 text-3xl text-black bg-primary-custom-green rounded">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.9 3.9 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6 6v8h2v-2.5l1 1V19h2v-2l-2-2l2-2v-2H9v1.5l-1 1V11zm9 0c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h3v-5h-2v3h-1v-4h3v-2z" />
      </svg>
    </span>
    <h4 class="mb-2 text-xl font-bold text-white">Fat Loss</h4>
    <p class="mb-4 text-text-light text-white">
      Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.
    </p>
    <a href="#"
      class="inline-flex items-center font-semibold text-white transition-all duration-300 group-hover:text-secondary-color">
      Join Now
      <ArrowLongRightIcon
        class="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  </div>
</NuxtLink>

<NuxtLink to="/signup" class="block">
  <div class="p-4 bg-slate-900 border-2 border-transparent rounded-lg transition duration-300 hover:bg-primary-extra-light hover:border-secondary group">
    <span class="inline-block p-2 mb-4 text-3xl text-black bg-primary-custom-green rounded">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
        <g fill="none">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
            d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
          <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
            d="M11 29h10l4 4M11 23h10l4 4M11 17h10l4 4M11 11h10l4 4M35 11H19M35 17H19M35 23H19M35 29H19" />
        </g>
      </svg>
    </span>
    <h4 class="mb-2 text-xl font-bold text-white">Weight Gain</h4>
    <p class="mb-4 text-text-light text-white">
      Learn how to gain weight effectively through the right nutrition and exercise strategies.
    </p>
    <a href="#"
      class="inline-flex items-center font-semibold text-white transition-all duration-300 group-hover:text-secondary-color">
      Join Now
      <ArrowLongRightIcon
        class="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  </div>
</NuxtLink>

      </div>
    </section>
  </div>


  <!-- Start ng pricing -->

  <div class="bg-black pt-10 ">

    <div class="text-white text-center">
      <p class="text-primary-custom-green ">Pricing</p>
      <h1 class="text-white text-6xl font-bold leading-6rem mb-10 tracking-tighter">
        CHOOSE <span class="text-stroke"> YOUR PERFECT</span> PLAN
      </h1>
    </div>
    <pricing />
  </div>

  <div>
    <about />
  </div>

  <div class="bg-black pb-10">
    <div class="text-center max-w-screen-xl mx-auto">
      <p class="text-primary-custom-green mb-2">Contacts Us</p>

      <h1 class="text-white text-6xl font-bold leading-tight mb-10 tracking-tighter ">

        <span class="text-stroke">GET IN</span> TOUCH
        <br>
        WE ARE <span class="text-stroke">AVAILBALE</span>
      </h1>


      <!-- Start here sa footer-->
      <div class="">
        <div class="text-white overflow-x-hidden ">
          <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <li class="flex items-center border border-white py-4 px-4 bg-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"
                class="mr-4 bg-primary-custom-green lg:rounded-xl">
                <path fill="black"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
              </svg>
              <div class="flex flex-col text-left ">
                <span class="text-2xl font-bold tracking-tight text-white">Email</span>
                <span class="mt-2">CamaligGym@gmail.com</span>
              </div>
            </li>
            <li class="flex items-center border border-white py-4 px-4 bg-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"
                class="mr-4 bg-primary-custom-green lg:rounded-xl">
                <path fill="black"
                  d="M3.714 5.258C3.523 4 4.41 2.87 5.765 2.456a.99.99 0 0 1 1.214.598l.435 1.16a1 1 0 0 1-.26 1.088L5.86 6.487a.5.5 0 0 0-.152.47l.012.052l.031.13a7.3 7.3 0 0 0 .729 1.805a7.3 7.3 0 0 0 1.296 1.627l.04.036a.5.5 0 0 0 .482.103l1.673-.527a1 1 0 0 1 1.072.319l.792.961c.33.4.29.988-.089 1.341c-1.037.967-2.463 1.165-3.455.368a12.7 12.7 0 0 1-3.024-3.529a12.4 12.4 0 0 1-1.554-4.385m3.043 1.765l1.072-.984a2 2 0 0 0 .521-2.176l-.434-1.16A1.99 1.99 0 0 0 5.473 1.5c-1.683.515-3.034 2.024-2.748 3.909c.2 1.316.661 2.99 1.678 4.738a13.7 13.7 0 0 0 3.262 3.805c1.488 1.195 3.474.787 4.764-.415a1.98 1.98 0 0 0 .179-2.708l-.792-.962a2 2 0 0 0-2.144-.636l-1.389.437a6.6 6.6 0 0 1-.936-1.223a6.3 6.3 0 0 1-.59-1.421" />
              </svg>
              <div class="flex flex-col text-left">
                <span class="text-2xl font-bold leading-9 tracking-tight text-white">Mobile</span>
                <span class="mt-2">0945 415 6007</span>
              </div>
            </li>
            <li class="flex items-center border border-white py-4 px-4 bg-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32"
                class="mr-4 bg-primary-custom-green lg:rounded-xl">
                <path fill="black"
                  d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3" />
                <path fill="black"
                  d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395" />
              </svg>
              <div class="flex flex-col text-left">
                <span class="text-2xl font-bold leading-9 tracking-tight text-white">Address</span>
                <span class="mt-2">Rizal St. Old Albay, Legazpi City</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pt-10">
      <bottomsec />
    </div>
    <div class="max-w-screen-xl mx-auto mt-6 flex items-center justify-center ">
      <div class="flex items-center justify-center w-full">
        <!-- Line on the left side of the text -->
        <div class="flex-grow border-t border-gray-300"></div>

        <!-- Text in the center of the line -->
        <span class="px-4 text-gray-500">© Camalig Fitness Gym, All right reserved.</span>

        <!-- Line on the right side of the text -->
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { HomeIcon, SparklesIcon, CalendarIcon, InformationCircleIcon, MapIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import { defineComponent } from 'vue';


defineComponent({
  name: 'IcOutlineEmail',
  name: 'FluentCall16Regular',
  name: 'MdiLocation',
  name: 'PhBarbellBold',
  name: 'IconParkOutlineMuscle',
  name: 'MdiWeightKilogram',
  name: 'IconParkOutlineWeight',
  name: 'RadialGradientContainer',

  // new
  name: 'TablerHome',
  name: 'MdiAccountServiceOutline',
  name: 'IconParkOutlinePlan',
  name: 'MdiCartOutline',
  name: 'HugeiconsContact02',



});

</script>

<style scoped>
.text-stroke {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  /* Test with a direct color code */
}
</style>
