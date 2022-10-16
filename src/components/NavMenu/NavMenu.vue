<template>
    <div class="navMenu container  max-w-sm w-[100%] h-[100vh] bg-white
     overflow-y-scroll bg-gray-900 

    ">

        <div class="px-6 pt-10 bg-[#E1CEAC]">
            <div class="flex items-center justify-between pb-6">
                <MovileBtn></MovileBtn>
                <div class="bg-white cursor-pointer p-1 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6  text-[#E1CEAC] stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>

           
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">

                    </div>
                    <input type="text" class="w-full rounded pl-8 pr-4 py-2.5 text-xs font-xl text-[#E1CEAC] bg-white placeholder-[#E1CEAC] focus:outline-none focus:ring-1 focus:ring-gray-300 " placeholder="search">
                </div>
            </div>  
        

        
        <hr class="h-1 bg-[#E0E0E0]">

    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

import MovileBtn from '../MobileBtn/MovileBtn.vue'

    const rangeProducts = reactive({
        'Cakes': {

        }, 
        'Pastries': {

        },
        'Bakery': {
            
        },
        'Gift Ideas': {
            
        },
        'Events': {
            
        },
        'Seasonal': {
            
        },
        'Buffer': {
            
        }, 
        'Contact': {
            
        }
    })
</script>

<style lang="css" scoped>

</style>