<template>
  <div class="relative h-[50vh] bg-black">
    <!-- Background Image with Opacity -->
    <div class="absolute inset-0 bg-cover bg-center opacity-30 bg-[url('/public/AboutBGgray.png')]"></div>

    <!-- Content (Logo, Navigation, and Button) -->
    <nav class="relative z-20 max-w-screen-xl mx-auto py-8 flex items-center justify-between gap-8">
      <!-- Logo (above the background) -->
      <div class="flex items-center gap-2 w-25 h-10">
        <img src="/public/Logo2.png" alt="logo" class="h-full" />
      </div>

      <!-- Navigation Links -->
      <ul class="relative z-20 list-none flex items-center gap-16">
        <li>
          <NuxtLink to="/" class="relative text-white flex items-center group">
            <p>Home</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#product" class="relative text-white flex items-center group">
            <p>Product</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#equipment" class="relative text-white flex items-center group">
            <p>Equipment</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#plan" class="relative text-white flex items-center group">
            <p>Plan</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#about" class="relative text-white flex items-center group">
            <p>About</p>
            <span
              class="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-custom-green transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- Join Now Button (above the background) -->
       <NuxtLink to="/signup">
      <button
        class="py-4 px-8 text-black bg-primary-custom-green rounded-lg border-none outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#00FF00] font-semibold">
        Join Now
      </button>
    </NuxtLink>
    </nav>
    

    <!-- "WORK WITH US" Text -->
    <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
      <h1 class="text-white text-6xl font-bold leading-6rem tracking-tighter mt-10">
        <span class="">ABOUT </span><span class=" text-primary-custom-green ">US</span>
      </h1>

      <!-- Text below "ABOUT US" -->
      <p class="text-gray-400 text-lg mt-4 text-center max-w-lg">
        "Barato pero Magayon"
      </p>
    </div>
  </div>

  <div class="parent bg-black pt-20 relative">
    <!-- Content Section -->
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-2 gap-40 items-center relative"> <!-- Added gap-x-20 for horizontal spacing -->
        <div class="absolute bottom-10 right-0 h-80 w-80 bg-radial-custom"></div>
        <!-- Left Column: Image Container -->
        <div class="relative right-20">
          <!-- First Box -->
          <div class="w-[300px] h-[300px] "> <!-- Added margin-left to move the first image right -->
            <img src="/values1.jpg" alt="First Image" class=" h-full object-cover rounded-lg" />
          </div>
          <!-- Second Box (overlapping image) -->
          <div class="absolute top-24 left-60 w-[300px] h-[300px]">
            <!-- Increased the left value to move it more right -->
            <img src="/values2.jpg" alt="Second Image" class=" h-full object-cover rounded-lg" />
          </div>
        </div>

        <!-- Right Column: Paragraph -->
        <div class="text-white">
          <p class=" text-primary-custom-green ">OUR VALUES</p>
          <h2 class="text-5xl font-bold mb-4">Barato pero <br> Magayon</h2>
          <p class="text-1xl text-gray-400">
            Affordable. Beautiful. Powerful. At Camalig Fitness Gym, <br> we believe in fitness
            that doesn't just transform your body—it <br> strengthens your roots. Affordable, high-quality
            workouts that <br> let you thrive without the hefty price tag. That's what we stand for.
          </p>
        </div>

      </div>
    </div>


    <div class="flex items-center justify-center pt-40">
      <div class="grid grid-cols-2 gap-40 items-center relative"> <!-- Added gap-x-20 for horizontal spacing -->
        <div class="absolute top-10 left-0 h-80 w-80 bg-radial-custom"></div>
        <div class="text-white pl-40">
          <p class=" text-primary-custom-green ">OUR MISSION</p>
          <h2 class="text-5xl font-bold mb-4">Fitness for <br> Every Bicolano.</h2>
          <p class="text-1xl text-gray-400 ">
            Founded on August 28, 2018, in Camaig,
            Albay by oach Karl Anthony Ayen,br we've made
            it Oir mssion to bring world-class ftness to
            every corner of Albay. From Camalig to
            Legazpi, we're making ftness affordable,
            empoæring, and accessible to all.
          </p>
        </div>

        <div class="">
          <!-- First Box -->
          <div class="w-[450px] h-[500px] "> <!-- Added margin-left to move the first image right -->
            <img src="/mission.jpg" alt="First Image" class=" h-full object-cover rounded-lg" />
          </div>

        </div>

      </div>
    </div>


    <div class="flex items-center justify-center pt-20">
      <div class="grid grid-cols-2 gap-40 items-center relative"> <!-- Added gap-x-20 for horizontal spacing -->
        <div class="absolute top-0 right-0 h-80 w-80 bg-radial-custom"></div>
        <!-- Left Column: Image Container -->
        <div class="relative right-40">
          <!-- First Box -->
          <div class="w-[320px] h-[250px] mb-5"> <!-- Added margin-left to move the first image right -->
            <img src="/vision1.jpg" alt="First Image" class=" h-full object-cover rounded-lg" />
          </div>
          <!-- Second Box (overlapping image) -->
          <div class="absolute top-24 left-60 w-[350px] h-[300px]">
            <!-- Increased the left value to move it more right -->
            <img src="/vision2.jpg" alt="Second Image" class=" h-full object-cover rounded-lg" />
          </div>
          <div class="w-[320px] h-[250px]  "> <!-- Added margin-left to move the first image right -->
            <img src="/vision3.jpg" alt="First Image" class=" h-full object-cover rounded-lg" />
          </div>
        </div>

        <!-- Right Column: Paragraph -->
        <div class="text-white ">
          <p class=" text-primary-custom-green ">OUR VISION</p>
          <h2 class="text-5xl font-bold mb-4">Building Stronger <br>
            Communities One <br>
            Branch at a Time.</h2>

          <p class="text-1xl text-gray-400">
            We're not just a gym—we're a fanty. With more <br>
            branches opening soon, we're spreading our philosophy <br>
            Of affordability and to even more
            neighborhoods, <br> Fitness isnt just about lifting weights—
            its <br> about lifting each other up.
          </p>

        </div>


      </div>
    </div>

    <div class="flex items-center justify-center pt-15">
      <div class="grid grid-cols-2 gap-40 items-center relative"> <!-- Added gap-x-20 for horizontal spacing -->
        <div class="absolute top-10 left-10 h-80 w-80 bg-radial-custom"></div>

        <div class="text-white ">

          <p class=" text-primary-custom-green ">OUR STORY</p>
          <h2 class="text-5xl font-bold mb-4">From a local <br> Dream to a <br> Growing Reality.</h2>
          <p class="text-1xl text-gray-400">
            What started as a local dream has turned into a <br>
            movement The Camalig Fitness name has become a <br>
            badge of pride for Albayanos, with members proudly <br>
            donning their CFG shirts. Our journey began with one <br>
            gym—now, we're expanding with every branch <br>
            reflecting our belief in affordable excellence.
          </p>
        </div>

        <div class="">
          <!-- First Box -->
          <div class="w-[520px] h-[600px] "> <!-- Added margin-left to move the first image right -->
            <img src="/public/ourstory.jpg" alt="First Image" class=" h-full object-cover rounded-lg" />
          </div>

        </div>

      </div>
    </div>
    <div class="max-w-screen-xl mx-auto mt-6 flex items-center justify-center pb-10">
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

<style scoped>
.text-stroke {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #ffffff;
}
</style>
