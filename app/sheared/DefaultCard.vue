<script setup lang="ts">

    import Header from "~/sheared/ui/text/Header.vue"
    import {HeaderSize} from "~/sheared/ui/text/Header.vue";
    import Text from "~/sheared/ui/text/Text.vue";

</script>

<template>
    <div class="flex flex-col gap-2 p-8 rounded-[24px] bg-gray-80 overflow-hidden border-1 border-white/8">
        <Header :size="HeaderSize.SMALL" v-if="$slots.title">
            <slot name="title" />
        </Header>
        <Text v-if="$slots.description" small>
            <slot name="description" />
        </Text>
        <slot />
    </div>
</template>

<style scoped>

</style>