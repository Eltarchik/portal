<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import PortalText from "~/sheared/ui/text/PortalText.vue"
    import Chip from "~/sheared/ui/Chip.vue"
    import Text from "~/sheared/ui/text/Text.vue"
    import StarIcon from "~/sheared/ui/icons/StarIcon.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"

</script>

<template>
    <Container>
        <template #title><PortalText />. Для жильцов и клиентов</template>
        <template #description>
            Система на основе ИИ с распознаванием номеров для жилых комплексов и бизнес-центров<br/>
            Полная автоматизация контроля доступа без переделки существующего оборудования
        </template>

        <div class="flex flex-col items-center gap-8">
            <Chip class="mt-[-8px]">
                <StarIcon />
                <Text fat class="text-white">Какие проблемы решает Портал?</Text>
            </Chip>
            <div class="grid grid-cols-[24%_24%_18%_28%] grid-rows-[400px_400px] gap-6 w-full">
                <DefaultCard class="col-span-2">
                    <template #title>Посторонние автомобили</template>
                    <template #description>
                        Нет свободных мест для своих авто во дворе
                    </template>
                </DefaultCard>
                <DefaultCard class="col-span-2">
                    <template #title>Отсутствие безопасности</template>
                    <template #description>
                        Отсутствие контроля въезда, риск проникновений и краж
                    </template>
                </DefaultCard>

                <DefaultCard class="col-span-3">
                    <template #title>Неудобный процесс</template>
                    <template #description>
                        Сложности с приглашением гостей, звонки охране
                    </template>
                </DefaultCard>
                <DefaultCard class="col-span-1">
                    <template #title>Непрозрачность</template>
                    <template #description>
                        Нет информации о машинах<br/>
                        на территории
                    </template>
                </DefaultCard>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>