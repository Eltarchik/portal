<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import Text from "~/sheared/ui/text/Text.vue"
    import DefaultButton from "~/sheared/ui/DefaultButton.vue"

</script>

<template>
    <Container>
        <div class="flex flex-col gap-30 w-full pb-10">
            <div class="grid grid-cols-3 gap-20 w-300">
                <div class="flex flex-col gap-6">
                    <Text>КПП будущего</Text>
                    <DefaultButton small class="w-fit">Запросить демо</DefaultButton>
                </div>
                <div class="flex flex-col gap-6">
                    <Text class="text-white">Компания</Text>
                    <Text>О нас</Text>
                    <Text>Вакансии</Text>
                    <Text>Блог</Text>
                    <Text>Контакты</Text>
                </div>
                <div class="flex flex-col gap-6">
                    <Text class="text-white">Юридическое</Text>
                    <Text>Конфиденциальность</Text>
                    <Text>Соглашение</Text>
                </div>
            </div>
            <div class="flex justify-between">
                <Text small>©2025 Portal Technologies, Inc.</Text>
                <div class="flex gap-4">

                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>