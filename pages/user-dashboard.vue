<template>
  <div class="flex h-screen w-full flex-col">
    <!-- Header Section -->
    <div class="flex w-full bg-[#1c1c24] border-b border-gray-800">
      <!-- Logo Section -->
      <div class="w-1/6 p-4 flex items-center justify-center border-r border-gray-800">
        <img src="/public/Logo2.png" alt="Logo" class="h-10" />
      </div>
      <!-- Avatar Section -->
      <div class="w-5/6 flex items-center justify-end p-4">
        <a href="#" class="rounded-full bg-white p-2">
          <span style="font-size: 1rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8" />
            </svg>
          </span>
        </a>
      </div>
    </div>

    <!-- Body Section (Flexbox with Left Navigation and Right Content) -->
    <div class="flex h-full w-full">
      <!-- Left Navigation Section -->
      <div class="w-1/6 bg-[#1c1c24] p-6 border-r border-gray-800 flex flex-col">
  <nav class="text-white flex-grow">
    <ul class="space-y-4">
      <li class="flex items-center hover:bg-gray-700 p-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
          <path fill="white" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" />
        </svg>
        <a href="#" class="ml-2 font-medium ">Dashboard</a>
      </li>
      <li class="flex items-center hover:bg-gray-700 p-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
          <path fill="white" d="M12.005 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5m5 10h-2v1a1 1 0 0 0 1.993.116l.007-.116zm-8 0h-2v1a1 1 0 0 0 1.993.116L9.005 12zm3-8A3 3 0 0 0 9.01 5.823L9.005 6v2h6V6a3 3 0 0 0-2.824-2.995z" />
        </svg>
        <a href="#" class="ml-2 font-medium">Product</a>
      </li>
      <li class="flex items-center hover:bg-gray-700 p-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
          <path fill="white" d="M200 64v128a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-56h-48v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v56h48V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16M36 72h-4a16 16 0 0 0-16 16v32H8.27A8.18 8.18 0 0 0 0 127.47A8 8 0 0 0 8 136h8v32a16 16 0 0 0 16 16h4a4 4 0 0 0 4-4V76a4 4 0 0 0-4-4m220 55.47a8.18 8.18 0 0 0-8.25-7.47H240V88a16 16 0 0 0-16-16h-4a4 4 0 0 0-4 4v104a4 4 0 0 0 4 4h4a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 8-8.53" />
        </svg>
        <a href="#" class="ml-2 font-medium">Equipment</a>
      </li>
      <li class="flex items-center hover:bg-gray-700 p-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
          <defs>
            <mask id="ipSPlan0">
              <g fill="none" stroke-width="4">
                <path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
                <path stroke="#fff" stroke-linejoin="round" d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z" />
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m16 31l6 6l12-12" />
                <path stroke="#fff" stroke-linecap="round" d="M16 5v8m16-8v8" />
              </g>
            </mask>
          </defs>
          <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPlan0)" />
        </svg>
        <a href="#" class="ml-2 font-medium">Plan</a>
      </li>
      <li class="flex items-center hover:bg-gray-700 p-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
          <path fill="white" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
        </svg>
        <a href="#" class="ml-2 font-medium">About</a>
      </li>
    </ul>
  </nav>
  <div class="mt-auto">
    <button class="w-full flex items-center text-red-500 mt-4 hover:bg-gray-700 p-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
          <path d="M9 12h12l-3-3m0 6l3-3" />
        </g>
      </svg>
      <span class="ml-2 font-medium">Logout</span>
    </button>
  </div>
</div>

<!-- Right Content Section -->
<div class="w-5/6 flex flex-col p-6 bg-black">
  <!-- Main Grid Content -->
  <div class="grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
    <div class="col-span-5 row-span-2 bg-[#1c1c24] rounded-3xl flex justify-center items-center text-white hover:bg-gray-700">CHART</div>
    <div class="col-span-3 row-span-2 bg-[#1c1c24] rounded-3xl flex justify-center items-center text-white hover:bg-gray-700">RECENT PURCHASED</div>
    <div class="col-span-2 row-span-2 bg-[#1c1c24] rounded-3xl flex justify-center items-center text-white hover:bg-gray-700">CALENDAR</div>
    <div class="col-span-6 row-span-3 bg-[#1c1c24] rounded-3xl flex justify-center items-center text-white hover:bg-gray-700">ATTENDANCE LIST</div>
    <div class="col-span-4 row-span-3 bg-[#1c1c24] rounded-3xl flex justify-center items-center text-white hover:bg-gray-700">WALA PA</div>
  </div>
</div>


    </div>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'MaterialSymbolsDashboard', //dashboard
  name: 'PhBarbellFill',//barbel
  name: 'RiShoppingBagFill',//shop
  name: 'IconParkSolidPlan',//plan
  name: 'MdiAbout',//about
  name: 'TablerLogout',//logout
});
</script>

<style></style>
