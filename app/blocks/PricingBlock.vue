<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import PortalText from "~/sheared/ui/text/PortalText.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue";

</script>

<template>
    <Container>
        <template #title>Ценообразование<br/>и мОдель лицензии</template>
        <template #description>
            Всё прозрачно
        </template>

        <div class="flex flex-col items-center gap-20">
            <div class="flex flex-col w-175">
                <GlassCard>

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