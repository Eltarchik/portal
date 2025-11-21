<script lang="ts">

    export enum HeaderSize {
        SMALL, MEDIUM, LARGE
    }

</script>

<script setup lang="ts">

    interface Props {
        size?: HeaderSize
    }

    const { size = HeaderSize.LARGE } = defineProps<Props>()

</script>

<template>
    <h1 v-if="size === HeaderSize.LARGE" class="text-[70px]/[84px] font-bold text-white cursor-default">
        <slot />
    </h1>
    <h2 v-else-if="size === HeaderSize.MEDIUM" class="text-[48px]/[64px] font-bold text-white cursor-default">
        <slot />
    </h2>
    <h3 v-else-if="size === HeaderSize.SMALL" class="text-[32px]/[40px] font-semibold text-white cursor-default">
        <slot />
    </h3>
</template>

<style scoped>

</style>