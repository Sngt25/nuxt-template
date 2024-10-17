<script setup lang="ts">
const isMonthly = ref<boolean>(true) // Now using monthly pricing
</script>

<template>
<div>
  <!-- First row: 3 plans -->
  <div class="grid gap-6 lg:grid-cols-3 items-start max-w-screen-xl mx-auto">
    <PricingTab :monthly="isMonthly" planName="Session" :price="{ monthly: 100 }"
      planDescription="Unlimited Use For The Day" :features="[ 
        'Unli use for 1 day', 
        'Smart Workout Plan', 
        'Access to All Gym Equipment', 
        
        
      ]" />

    <PricingTab :monthly="isMonthly" :popular="true" planName="Monthly Students and Stars on 45"
      :price="{ monthly: 700 }" planDescription="Unlimited Use For The Month" :features="[ 
        '45 years old and above', 
        'Unli use for 1 month', 
        'Smart Workout Plan', 
        'Unlimited Access to All Gym Equipment', 
      ]" />

    <PricingTab :monthly="isMonthly" planName="Monthly Regular Rate" :price="{ monthly: 800 }"
      planDescription="Unlimited Use For The Month" :features="[ 
        'Unli use for 1 month', 
        'Smart Workout Plan', 
        'Unlimited Access to All Gym Equipment', 
      ]" />
  </div>

  <!-- Second row: 2 plans, centered with same width -->
  <div class="grid gap-6 lg:grid-cols-2 items-start justify-center max-w-screen-md mx-auto mt-8">
    <PricingTab :monthly="isMonthly" planName="Personal Training" :price="{ monthly: 1800 }"
      planDescription="1-on-1 Personal Training" :features="[ 
        '12 sessions (consumable in 35 days)', 
        'Personalized Workout Plan', 
        'Access to All Gym Equipment', 
      ]" />

    <PricingTab :monthly="isMonthly" planName="Boxing Fitness" :price="{ monthly: 2700 }"
      planDescription="Boxing Fitness" :features="[ 
        '12 sessions (consumable in 35 days)', 
        'Boxing Lessons', 
        'Personal Training', 
        
      ]" />
  </div>
</div>



</template>
