<script setup lang="ts">

    import Header from "@/sheared/ui/Header.vue"
    import { HeaderSize } from "~/sheared/ui/Header.vue"

</script>

<template>
    <button class="flex justify-center items-center pb-1 h-19 px-6
                  bg-white/8 rounded-[32px] border-1 border-white/8
                  cursor-pointer"
    >
        <Header :size="HeaderSize.SMALL" class="h-fit">
            <slot />
        </Header>
    </button>
</template>

<style scoped>

</style>