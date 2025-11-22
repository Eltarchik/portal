<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import PortalText from "~/sheared/ui/text/PortalText.vue"
    import Chip from "~/sheared/ui/Chip.vue"
    import Text from "~/sheared/ui/text/Text.vue"
    import StarIcon from "~/sheared/ui/icons/StarIcon.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import moneys from "~/assets/imgs/cards/moneys.svg"
    import anxiety from "~/assets/imgs/cards/anxiety.svg"
    import wait from "~/assets/imgs/cards/wait.svg"
    import arrow from "~/assets/imgs/cards/arrow.svg"

</script>

<template>
    <Container>
        <template #title><PortalText />. Для УК и застройщиков</template>
        <template #description>
            Система на основе ИИ с распознаванием номеров для жилых комплексов и бизнес-центров<br/>
            Полная автоматизация контроля доступа без переделки существующего оборудования
        </template>

        <div class="flex flex-col items-center gap-8">
            <Chip class="mt-[-8px]">
                <StarIcon />
                <Text fat class="text-white">Какие проблемы решает Портал?</Text>
            </Chip>
            <div class="grid grid-cols-4 grid-rows-[400px_400px] gap-6 w-full">
                <DefaultCard class="relative col-span-2">
                    <template #title>Высокие расходы на ФОТ</template>
                    <template #description>
                        По данным нашего исследования,<br/>
                        охрана обходится в 900 000+ руб/год за КПП
                    </template>
                    <img :src="moneys" alt="" class="absolute left-0 bottom-[-40px]">
                </DefaultCard>
                <DefaultCard class="relative col-span-2">
                    <template #title>Человеческий фактор</template>
                    <template #description>
                        Ошибки, жалобы жильцов, необходимость проверок
                    </template>
                    <img :src="anxiety" alt="" class="absolute left-0 bottom-0">
                </DefaultCard>

                <DefaultCard class="relative col-span-1">
                    <template #title>Отсутствие аналитики</template>
                    <template #description>
                        Нет контроля над потоками,
                        невозможно выявить чужие авто
                    </template>
                </DefaultCard>
                <DefaultCard class="relative col-span-2">
                    <template #title>Сложное управление гостями</template>
                    <template #description>
                        Выдача пропусков требует участия охранника
                    </template>
                    <img :src="wait" alt="" class="absolute right-0 bottom-0">
                </DefaultCard>
                <DefaultCard class="relative col-span-1">
                    <template #title>Слабая безопасность</template>
                    <template #description>
                        Устаревшие методы<br/>
                        или их отсутствие
                    </template>
                    <img :src="arrow" alt="" class="absolute right-0 bottom-[-16px]">
                </DefaultCard>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>