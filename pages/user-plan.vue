<script setup lang="ts">
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

defineComponent({
  name: 'MaterialSymbolsDashboard', //dashboard
  name: 'PhBarbellFill',//barbel
  name: 'RiShoppingBagFill',//shop
  name: 'IconParkSolidPlan',//plan
  name: 'HumbleiconsLogout',
  name: 'IconamoonProfileFill',//profile sa sidenav
  name: 'MaterialSymbolsDownloadSharp',//donwlaod
  name: 'MdiCart',//cart


});
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-black ">
    <div class="hidden border-r md:block border-b border-gray-700 bg-[#1c1c24]">
      <div class="flex h-full max-h-screen flex-col gap-2 ">
        <div
          class="flex h-14 items-center justify-center border-b px-4 lg:h-[60px] lg:px-6 border-gray-700 bg-[#1c1c24]">
          <img src="/public/Logo2.png" alt="Logo" class="h-10 " />
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4 gap-2 pt-2">
            <p class="text-gray-600">MAIN MENU</p>
            <NuxtLink to="/user-dashboard"
              class=" flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-[#27272f]">

              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path fill="white" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" />
              </svg>
              <p class="text-white">Dashboard</p>

            </NuxtLink>
            <NuxtLink to="/user-product"
              class=" flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-[#27272f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path fill="white"
                  d="M12.005 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5m5 10h-2v1a1 1 0 0 0 1.993.116l.007-.116zm-8 0h-2v1a1 1 0 0 0 1.993.116L9.005 12zm3-8A3 3 0 0 0 9.01 5.823L9.005 6v2h6V6a3 3 0 0 0-2.824-2.995z" />
              </svg>
              <p class="text-white">Products</p>
            </NuxtLink>
            <NuxtLink to="/user-equipment"
              class=" flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-[#27272f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
                <path fill="white"
                  d="M200 64v128a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-56h-48v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v56h48V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16M36 72h-4a16 16 0 0 0-16 16v32H8.27A8.18 8.18 0 0 0 0 127.47A8 8 0 0 0 8 136h8v32a16 16 0 0 0 16 16h4a4 4 0 0 0 4-4V76a4 4 0 0 0-4-4m220 55.47a8.18 8.18 0 0 0-8.25-7.47H240V88a16 16 0 0 0-16-16h-4a4 4 0 0 0-4 4v104a4 4 0 0 0 4 4h4a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 8-8.53" />
              </svg>
              <p class="text-white">Equipment</p>
            </NuxtLink>

            <a href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-[#27272f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
                <defs>
                  <mask id="ipSPlan0">
                    <g fill="none" stroke-width="4">
                      <path fill="#fff" stroke="#fff" stroke-linejoin="round"
                        d="M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
                      <path stroke="#fff" stroke-linejoin="round" d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z" />
                      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m16 31l6 6l12-12" />
                      <path stroke="#fff" stroke-linecap="round" d="M16 5v8m16-8v8" />
                    </g>
                  </mask>
                </defs>
                <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSPlan0)" />
              </svg>
              <p class="text-white">Plan</p>
            </a>

            <hr class="border-gray-700 w-1/8" />

            <p class="text-gray-600">ACCOUNT</p>
            <a href="/"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-[#27272f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path fill="white" fill-rule="evenodd"
                  d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                  clip-rule="evenodd" />
              </svg>
              <p class="text-white">Profile</p>

            </a>

            <a href="/"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-[#27272f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1" />
              </svg>
              <NuxtLink to="/login">
              <p class="text-red-600">Logout</p>
            </NuxtLink>
            </a>

          </nav>

        </div>

      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 border-gray-700 bg-[#1c1c24] ">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">
              <a href="#" class="flex items-center gap-2 text-lg font-semibold">
                <Package2 class="h-6 w-6" />
                <span class="sr-only">Acme Inc</span>
              </a>
              <a href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                <Home class="h-5 w-5" />
                Dashboard
              </a>
              <a href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                <ShoppingCart class="h-5 w-5" />
                Orders
                <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </a>
              <a href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                <Package class="h-5 w-5" />
                Products
              </a>
              <a href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                <Users class="h-5 w-5" />
                Customers
              </a>
              <a href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                <LineChart class="h-5 w-5" />
                Analytics
              </a>
            </nav>

          </SheetContent>
        </Sheet>
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
            </div>
          </form>
        </div>
        <a href="#" class="flex rounded-lg bg-[#27272f] text-white p-2 mr-1  hover:bg-gray-800">
          <span class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="#c3c3c4" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-8 4v-5h2v3h12v-3h2v5z" />
            </svg>
          </span>
          <p class="text-sm text-custom-gray">Install the App</p>
        </a>
        <a href="#" class="flex items-center rounded-lg bg-[#27272f] hover:bg-gray-800 text-white p-2">
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="#c3c3c4"
                d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
            </svg>
          </span>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <NuxtLink to="/login">
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </NuxtLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl text-white">
            Plan
          </h1>
        </div>
        <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div class="flex flex-col items-center gap-1 text-center">

          </div>
        </div>
      </main>
    </div>
  </div>
</template>