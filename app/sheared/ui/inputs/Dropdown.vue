<script lang="ts">

    export interface DropdownItem {
        title: string
        name: string
    }

</script>

<script setup lang="ts">

    import Text from "~/sheared/ui/text/Text.vue"
    import DownArrowIcon from "~/sheared/ui/icons/DownArrowIcon.vue";

    interface Props {
        items: DropdownItem[]
        placeholder?: string
    }

    const { items, placeholder = "" } = defineProps<Props>()

    const dropdown = ref<HTMLDivElement | undefined>()
    const opened = ref<boolean>(false)

    const model = defineModel<DropdownItem | null>()
    const displayedText = computed<string>(() => {
        return model.value?.title || placeholder
    })

    const onOutsidePress = (event: MouseEvent) => {
        if (dropdown.value && !dropdown.value.contains(event.target as Node | null)) {
            opened.value = false
        }
    }

    const onSelectItem = (item: DropdownItem | null) => {
        model.value = item
        opened.value = false
    }

    onMounted(() => {
        document.addEventListener('mousedown', onOutsidePress)
    })

    onUnmounted(() => {
        document.removeEventListener('mousedown', onOutsidePress)
    })

</script>

<template>
    <div class="relative flex flex-col gap-2" ref="dropdown">
        <button class="flex items-center w-full h-13 px-5 bg-white/8
                      backdrop-blur-[12px] border-1 border-white/8
                      rounded-[20px] text-white text-[20px] cursor-pointer"
                @click="opened = !opened"
        >
            <Text class="cursor-pointer w-full text-left" :class="[model ? 'text-white' : 'text-gray-50']">
                {{ displayedText }}
            </Text>
            <DownArrowIcon class="transition-transform duration-200" :class="[opened ? 'rotate-180' : '']" />
        </button>
        <div
             class="absolute flex flex-col p-2 bg-white/8 rounded-[20px]
                   border-1 border-white/8 backdrop-blur-[12px]
                   top-15 w-full z-10 transition-all duration-200"
             :class="[opened ? 'opacity-100' : 'opacity-0 pointer-events-none']"
        >
            <button v-for="item in items" :key="item.name"
                    class="flex items-center h-10 px-5
                          rounded-[12px] text-white text-[20px]
                          hover:bg-white/8 transition-colors cursor-pointer"
                    @click="onSelectItem(item)"
            >
                <Text class="cursor-pointer" :class="[model?.name === item.name ? 'text-white' : 'text-gray-40']">
                    {{ item.title }}
                </Text>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>