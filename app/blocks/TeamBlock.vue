<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import Text from "~/sheared/ui/text/Text.vue"

    interface Developer {
        name: string
        role: string
        stage: string
        description: string
    }

    const team: Developer[] = [
        {
            name: "Семён Юрьевич Лутовинов",
            role: "Лидер, PM",
            stage: "| 6 лет опыта",
            description: "Руководитель студии веб-разработки, 20+ успешных проектов"
        },
        {
            name: "Марк Александрович Каргин",
            role: "ML-разработчик",
            stage: "| 7 лет опыта",
            description: "Эксперт в компьютерном зрении, призер хакатонов"
        },
        {
            name: "Егор Владимирович Грудинин",
            role: "Backend-разработчик",
            stage: "| 4 лет опыта",
            description: "Обширный технологический стек"
        },
        {
            name: "Макар Александрович Грибков",
            role: "Frontend-разработчик",
            stage: "| 6 лет опыта",
            description: "Специалист на Svelte/Vue, призер олимпиад по разработке"
        },
        {
            name: "Егор Сергеевич Горбунов",
            role: "UX/UI дизайнер",
            stage: "| 5 лет опыта",
            description: "Победитель конкурса цифрового дизайна, опыт в моушене"
        },
    ]

</script>

<template>
    <Container>
        <template #title>Наша команда</template>

        <div class="flex flex-wrap justify-center items-center gap-12">
            <GlassCard v-for="dev in team" class="w-84 h-84">
                <template #title>{{ dev.name }}</template>

                <div class="flex flex-col gap-4">
                    <Text>
                        {{ dev.role }}
                        <br/>
                        {{ dev.stage }}
                    </Text>
                    <Text small>{{ dev.description }}</Text>
                </div>
            </GlassCard>
        </div>

        <div class="relative flex flex-col w-full">
            <GlassCard class="absolute w-100 h-25 left-[-20px] rotate-14" />
            <GlassCard class="absolute self-center w-100 h-25 top-[-40px] rotate-356" />
            <GlassCard class="absolute w-100 h-25 right-[-20px] rotate-340" />
        </div>
    </Container>
</template>

<style scoped>

</style>