<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

</script>

<template>

  <div class="background-image w-full min-h-screen flex items-start justify-start p-10">

    <div
      class="absolute top-4 left-1/2 transform -translate-x-1/2 logo-size md:left-4 md:transform-none md:-translate-x-0">
      <img src="/public/Logo2.png" alt="Logo" />
    </div>
    <div
      class="absolute mt-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white flex flex-col hidden md:flex">
      <span class="text-white text-sm md:text-lg tracking-tight font-custom font-extrabold ">START YOUR</span>
      <span class="text-neonGreen font-extrabold text-4xl md:text-6xl tracking-tight font-custom">JOURNEY</span>
      <div class="flex ml-auto">
        <span v-for="(n, index) in 5" :key="n"
          :class="[index === 0 ? 'opacity-50' : '', 'text-[rgb(124_252_0_/var(--tw-text-opacity))] text-4xl font-bold -mt-2.5']">›</span>
        <span class="text-white font-extrabold text-sm md:text-lg tracking-tight font-custom ml-3">NOW</span>
      </div>
    </div>

    <div class="ml-6 md:ml-20 mt-6 md:mt-20 grid w-50% max-w-lg gap-6 p-8 rounded shadow-md">
      <div class="grid gap-2 text-center mt-10">
        <h1 class="text-3xl font-bold text-white">Login Now!</h1>
        <p class="text-balance text-muted-foreground text-white">
          Enter your email below to login to your account
        </p>
      </div>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email" class="text-white">Email</Label>
          <Input id="email" type="email" placeholder="russelgay@example.com" required />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password" class="text-white">Password</Label>
            <a href="/forgot-password" class="ml-auto inline-block text-sm underline text-white">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div class="flex gap-5 mt-5">
          <Button type="submit" class="flex-1 text-black" style="background-color: rgb(124, 252, 0);">Login</Button>
          <Button variant="outline" class="flex-1 flex items-center justify-center">
            Login with
            <img src="/public/google-icon.png" alt="Google" class="h-5 ml-2" />
          </Button>
        </div>
      </div>
      <div class="mt-4 text-center text-sm text-white">
        Don't have an account?
        <NuxtLink to="signup">
          <a href="#" class="underline text-white">Sign up</a>
        </NuxtLink>
      </div>
    </div>

  </div>



</template>

<style scoped>
.logo-size {
  width: 150px;
  /* Adjust the width as needed */
  height: auto;
  /* Maintain aspect ratio */
}

.background-image {
  background: url('/orig.png') no-repeat center center;
  background-size: cover;

}

.bg-transparent {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
