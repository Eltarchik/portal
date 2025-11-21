<script setup lang="ts">

    import Header from "~/sheared/ui/text/Header.vue"
    import { HeaderSize } from "~/sheared/ui/text/Header.vue"

</script>

<template>
    <button class="flex justify-center items-center pb-1 h-19 px-6
                  bg-white/8 rounded-[32px] border-1 border-white/8
                  backdrop-blur-[12px] cursor-pointer
                  hover:scale-104 hover:bg-violet-40 hover:active:scale-98
                  transition-all duration-600"
    >
        <Header :size="HeaderSize.SMALL" class="h-fit cursor-pointer">
            <slot />
        </Header>
    </button>
</template>

<style scoped>

</style>