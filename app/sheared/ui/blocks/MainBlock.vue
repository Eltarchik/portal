<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import DefaultButton from "~/sheared/DefaultButton.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import stars from "~/assets/imgs/cards/stars.svg"
    import progressBar from "~/assets/imgs/cards/progress-bar.svg"
    import analytic from "~/assets/imgs/cards/analytic.svg"
    import bloom from "~/assets/imgs/cards/bloom.svg"
    import help from "~/assets/imgs/cards/help.svg"

</script>

<template>
    <Container>
        <template #title>
            Автоматизируйте<br/>КПП за 2 дня.
        </template>
        <template #description>
            Сократите расходы на охрану на 90% в год
        </template>

        <div class="flex flex-col items-center">
            <DefaultButton>Смотреть демо</DefaultButton>
                <div class="relative flex w-full h-308">
                <GlassCard class="absolute w-82 h-82 left-10 top-[-32px]">
                    <template #title>
                        Установка<br/>за 2 дня
                    </template>

                    <img :src="stars" alt="" width="240px" class="pt-3 pl-2">
                </GlassCard>

                <GlassCard class="absolute w-82 h-82 top-96">
                    <template #title>
                        Окупаемость<br/>за 6-12 месяцев
                    </template>

                    <img :src="progressBar" alt="" width="240px" class="pt-20 ml-[-32px]">
                </GlassCard>

                <GlassCard class="absolute w-82 h-82 left-40 top-191">
                    <template #title>
                        Полная аналитика
                    </template>

                    <img :src="analytic" alt="" width="320px" class="flex mt-[-92px] ml-[-18px] min-w-74">
                </GlassCard>

                <GlassCard class="absolute w-82 h-82 left-146 top-226">
                    <template #title>
                        Полная автоматизация
                    </template>

                    <img :src="bloom" alt="" width="340px" class="absolute bottom-[-32px] right-0">
                </GlassCard>

                <GlassCard class="absolute w-82 h-82 left-248 top-212">
                    <template #title>
                        Поддержка 24/7
                    </template>

                    <img :src="help" alt="" width="188px" class="absolute right-18 bottom-5">
                </GlassCard>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>