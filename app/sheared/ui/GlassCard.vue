<script setup lang="ts">

    import Header from "@/sheared/ui/Header.vue"
    import {HeaderSize} from "~/sheared/ui/Header.vue";

</script>

<template>
    <div class="flex flex-col gap-2 p-8 rounded-[32px] glass overflow-hidden">
        <Header :size="HeaderSize.SMALL" v-if="$slots.title">
            <slot name="title" />
        </Header>
        <slot />
    </div>
</template>

<style scoped>

</style>