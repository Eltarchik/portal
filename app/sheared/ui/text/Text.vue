<script setup lang="ts">

    interface Props {
        small?: boolean
        fat?: boolean
    }

    const { small, fat } = defineProps<Props>()

</script>

<template>
    <p :class="[
            small ? 'text-[16px]' : 'text-[20px]',
            fat ? 'font-semibold' : 'font-medium',
            'text-gray-30', 'cursor-default'
        ]"
    >
        <slot />
    </p>
</template>

<style scoped>

</style>