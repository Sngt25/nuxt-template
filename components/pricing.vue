<script setup lang="ts">


const isAnnual = ref<boolean>(true)
</script>

<template>
  <div>


    <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-10">
      <div class="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full ">
        <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
          <span
            class="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
            :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
        </span>
        <button
          class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
          :class="isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'" @click="isAnnual = true"
          :aria-pressed="isAnnual">Yearly <span
            :class="isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'">-20%</span></button>
        <button
          class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
          :class="isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'" @click="isAnnual = false"
          :aria-pressed="isAnnual">Monthly</button>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3 items-start max-w-screen-xl mx-auto">

      
      <PricingTab :yearly="isAnnual" planName="Session" :price="{ yearly: 960, monthly: 100 }"
        planDescription="Unlimited access for one day, including a smart workout plan and complimentary fitness assessment."
        :features="[
          'Unli use for 1 day',
          'Smart Workout Plan',
          'Access to All Gym Equipment',
          'Complimentary Fitness Assessment',
          'Free Group Exercise Classes',

        ]" />

      <PricingTab :yearly="isAnnual" :popular="true" planName="Monthly Students and Stars on 45"
        :price="{ yearly: 7200, monthly: 750 }"
        planDescription="Tailored fitness plans, low-impact classes, and comprehensive wellness support for above 45."
        :features="[
          '45 years old and above',
          'Smart Workout Plan',
          'Unlimited Access to All Gym Equipment',
          'Personalized Fitness Plan',
          'Free Group Exercise Classes',
          'Complimentary Fitness Assessment Every Month',

        ]" />

      <PricingTab :yearly="isAnnual" planName="Monthly Regular Rate" :price="{ yearly: 7680, monthly: 800 }"
        planDescription="Unlimited access with personalized fitness plans, free classes, and monthly personal training sessions."
        :features="[
          'Unli use for 1 month',
          'Smart Workout Plan',
          'Unlimited Access to All Gym Equipment',
          'Personalized Fitness Plan',
          'Free Group Exercise Classes',
          'Complimentary Fitness Assessment Every Month',
          'Discount on Wellness Products and Supplements',
          'Monthly 1-on-1 Personal Training Sessions',


        ]" />

    </div>

  </div>
</template>