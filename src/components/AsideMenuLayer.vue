<script setup>
 import { PhBook,PhPresentation,PhStudent,PhBackpack,PhUsersThree,PhQuestion } from "@phosphor-icons/vue";
import { mdiLogout, mdiClose } from '@mdi/js'
import { computed } from 'vue'
import AsideMenuList from '@/components/AsideMenuList.vue'
import AsideMenuItem from '@/components/AsideMenuItem.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { useMyStore } from '@/stores/mystore.js';

const myStore = useMyStore();
const hasToken = myStore.token;
const userRole =  myStore.role;


const studentValue = '"student"';
const adminValue = '"admin"';

defineProps({
  menu: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['menu-click', 'aside-lg-close-click'])

const logoutItem = computed(() => ({
  label: 'Logout',
  icon: mdiLogout,
  color: 'info',
  isLogout: true
}))

const menuClick = (event, item) => {
  emit('menu-click', event, item)
}

const asideLgCloseClick = (event) => {
  emit('aside-lg-close-click', event)
}
</script>

<template>
  <aside id="aside" class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden">
    <div class="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
      <div class="aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900">
        <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
          <b class="font-black">One</b>
        </div>
        <button class="hidden lg:inline-block xl:hidden p-3" @click.prevent="asideLgCloseClick">
          <BaseIcon :path="mdiClose" />
        </button>
      </div>
      <div class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars dark:aside-scrollbars-[slate]">
        <!-- <AsideMenuList :menu="menu" @menu-click="menuClick" /> -->

       
        <!-- My element Menu Here -->


<div  v-if='userRole == adminValue'>
  <li>

<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/units">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
    <ph-book :size="32" color="#D0BFFF" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Add Unit</span>
</router-link>
</li>


<li>
<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/lessons">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
    <ph-presentation :size="32" color="#FFF8C9" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Add Lesson</span>
</router-link>
</li>

<li>
<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/schools">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
  <ph-backpack :size="32" color="#F99417" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Add School</span>
</router-link>
</li>

<li>
<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/students">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
  <ph-student :size="32" color="#FF6969" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Add Student</span>
</router-link>
</li>


<li>
<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/add-study-program">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
  <ph-users-three :size="32" color="#B6FFFA" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Start Study</span>
</router-link>
</li>



<li>
<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/add-question">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
  <ph-question :size="32" color="#80B3FF" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Add Qution</span>
</router-link>
</li>




</div>







<!-- Student Menu -->
<div  v-if='userRole == studentValue'>

  <li>

<router-link class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white" to="/units">
  <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
    <ph-book :size="32" color="#D0BFFF" weight="fill" />
</span>

<span class="grow text-ellipsis line-clamp-1 pr-12">Browsing Unit</span>
</router-link>
</li>


</div>

      </div>

      <ul v-if="hasToken">
        <!-- <AsideMenuItem :item="logoutItem" @menu-click="menuClick" /> -->
        <a @click="myStore.logout()"
          class="flex cursor-pointer py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"><span
            class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
              height="18" class="inline-block">
              <path fill="currentColor"
                d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z">
              </path>
            </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Logout</span>
          <!--v-if-->
        </a>
      </ul>
      <ul v-else>
        hello
    </ul>
  </div>
</aside></template>
