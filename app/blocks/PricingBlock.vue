<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import Text from "~/sheared/ui/text/Text.vue";

    interface Block {
        count: string
        points: string
        price: string
        description: string
    }

    const blocks: Block[] = [
        {
            count: "1",
            points: "Точка КПП",
            price: "300 000 - 350 000 ₽",
            description: "Лицензия на один объект с полным функционалом. Стремительная окупаемость 6-12 месяцев"
        },
        {
            count: "5",
            points: "Точек КПП",
            price: "1 100 000 - 1 350 000 ₽",
            description: "Лицензия на один объект с полным функционалом. Стремительная окупаемость 6-12 месяцев"
        },
        {
            count: "10+",
            points: "Точек КПП",
            price: "Договорная",
            description: "Индивидуальные условия и поддержка. Стремительная окупаемость 6-12 месяцев"
        },
    ]

</script>

<template>
    <Container>
        <template #title>Ценообразование<br/>и мОдель лицензии</template>
        <template #description>
            Всё прозрачно
        </template>

        <div class="flex flex-col items-center gap-20">
            <div class="flex flex-col gap-6 w-175">
                <GlassCard v-for="block in blocks" :key="block.count" class="flex-row gap-16 hover:bg-violet-40 transition-colors duration-600">
                    <div class="flex flex-col gap-0 min-w-36 mt-[-4px]">
                        <Header :size="HeaderSize.MEDIUM">{{ block.count }}</Header>
                        <Text fat class="text-white">{{ block.points }}</Text>
                    </div>
                    <div class="flex flex-col gap-0">
                        <Header :size="HeaderSize.SMALL">{{ block.price }}</Header>
                        <Text small>{{ block.description }}</Text>
                    </div>
                </GlassCard>
            </div>

            <div class="flex flex-col items-center gap-8">
                <Header :size="HeaderSize.MEDIUM">В лицензию включено</Header>
                <div class="grid grid-cols-6 grid-rows-2 gap-6 w-full">
                    <DefaultCard class="col-span-2">
                        <template #title>Веб-админ-панель с полным функционалом</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-2">
                        <template #title>Мобильное приложение для жильцов</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-2">
                        <template #title>ML-модуль распознавания номеров</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-2">
                        <template #title>Облачное хранилище данных на 12 месяцев</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-2">
                        <template #title>Техническая поддержка 24/7</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-2">
                        <template #title>Обновления и улучшения ПО</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-3">
                        <template #title>Интеграция с существующим оборудованием</template>
                    </DefaultCard>
                    <DefaultCard class="col-span-3">
                        <template #title>Обучение администраторов (онлайн + документация)</template>
                    </DefaultCard>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>