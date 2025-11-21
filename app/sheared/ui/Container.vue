<script setup lang="ts">

    import Header from "~/sheared/ui/text/Header.vue"
    import Text from "~/sheared/ui/text/Text.vue"

</script>

<template>
    <div class="flex flex-col gap-8 max-w-300 w-full h-fit">
        <div class="flex flex-col gap-3 w-full items-center">
            <Header class="text-center">
                <slot name="title" />
            </Header>
            <Text class="text-center">
                <slot name="description" />
            </Text>
        </div>
        <slot />
    </div>
</template>

<style scoped>

</style>