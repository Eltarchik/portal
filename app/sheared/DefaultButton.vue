<script setup lang="ts">

    import Header from "@/sheared/ui/Header.vue"
    import { HeaderSize } from "~/sheared/ui/Header.vue"

</script>

<template>
    <button class="flex justify-center content-center h-19 px-6 bg-white/8 rounded-[32px]">
        <Header :size="HeaderSize.MEDIUM"></Header>
    </button>
</template>

<style scoped>

</style>