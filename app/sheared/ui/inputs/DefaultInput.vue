<script setup lang="ts">

    interface Props {
        placeholder?: string
        type?: "text" | "number"
        max?: number
        name?: string
    }

    const { placeholder = "", type = "text", max, name } = defineProps<Props>()

    const model = defineModel()

</script>

<template>
    <input class="flex items-center h-13 px-5 bg-white/8
                 backdrop-blur-[12px] border-1 border-white/8
                 rounded-[20px] cursor-text text-white text-[20px]
                 placeholder-gray-50"
           :placeholder="placeholder"
           :type="type"
           :max="max"
           :name="name"
           v-model="model"
    />
</template>

<style scoped>

</style>