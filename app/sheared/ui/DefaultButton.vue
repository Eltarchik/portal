<script setup lang="ts">

    import Header from "~/sheared/ui/text/Header.vue"
    import { HeaderSize } from "~/sheared/ui/text/Header.vue"
    import Text from "~/sheared/ui/text/Text.vue";

    interface Props {
        small?: boolean
    }

    const { small } = defineProps<Props>()

</script>

<template>
    <button class="flex justify-center items-center px-6
                  bg-white/8 border-1 border-white/8
                  backdrop-blur-[12px] cursor-pointer
                  hover:scale-104 hover:bg-violet-40 hover:active:scale-98
                  transition-all duration-600"
            :class="[small ? 'h-10 rounded-[20px]' : 'h-19 rounded-[32px] pb-1']"
    >
        <Header v-if="!small" :size="HeaderSize.SMALL" class="h-fit cursor-pointer">
            <slot />
        </Header>
        <Text v-else fat class="text-white cursor-pointer">
            <slot />
        </Text>
    </button>
</template>

<style scoped>

</style>