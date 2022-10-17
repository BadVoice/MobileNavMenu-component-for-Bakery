<template>
    <div 
        :class="{ active: isActive }"
                    @click.prevent="toggleModal"

                    
                    class="toggle ">
                        
                    <span></span>
                    <span></span>
                    <span></span>
                
                </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"

   
    
    const isActive = ref(false)
    
    function toggleModal() {
        isActive.value = !isActive.value
    }
</script>

<style lang="scss" scoped>
    
    @import '@/components/MobileBtn/MobileBtn.scss'
</style>