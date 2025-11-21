<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import Text from "~/sheared/ui/text/Text.vue";

    interface QuestionBlock {
        question: string
        answer: string
    }

    const blocks: QuestionBlock[] = [
        {
            question: "Какую камеру нужно установить?",
            answer: "Работает с большинством IP-камер. Рекомендуем Full HD (1080p)"
        },
        {
            question: "Как система распознает номера в темноте?",
            answer: "ML-модель обучена на 100 000+ фото, работает с ИК-освещением"
        },
        {
            question: "Какая точность распознавания?",
            answer: "98-99% для русских номеров. Остальное проверяет администратор"
        },
        {
            question: "Нужно ли менять шлагбаумы?",
            answer: "Нет! Интегрируется через API/RS-485 с существующим оборудованием"
        },
        {
            question: "Какой срок внедрения?",
            answer: "2 дня от установки камеры до готовности"
        },
        {
            question: "Есть ли лицензионные ограничения?",
            answer: "Одна лицензия = один КПП. Есть скидки для 5+ КПП"
        },
        {
            question: "Какая гарантия?",
            answer: "Договор с гарантией сокращения расходов на 30% минимум"
        },
        {
            question: "Как жилец добавляет гостя?",
            answer: "Через мобильное приложение: \"Пригласить гостя\", номер авто, время доступа"
        },
        {
            question: "Что если номер не распознан?",
            answer: "Система отправляет фото администратору. Он проверяет и добавляет вручную"
        },
        {
            question: "Кто видит историю проездов?",
            answer: "Администратор видит все. Жилец только свои и гостевые авто"
        },
        {
            question: "Как удалить авто из базы?",
            answer: "Администратор или жилец удаляют авто в один клик"
        },
        {
            question: "Что если система упадет?",
            answer: "Локальное хранилище обеспечивает автономную работу до 7 дней"
        },
        {
            question: "Есть ли пробный период?",
            answer: "Да, 1 месяц демонстрационной версии с полным функционалом"
        },
    ]


    const cards: [QuestionBlock[], QuestionBlock[]] = [
        blocks.slice(0, Math.round(blocks.length / 2)),
        blocks.slice(Math.round(blocks.length / 2)),
    ]

</script>

<template>
    <Container>
        <template #title>FAQ</template>
        <template #description>Frequently Asked Questions</template>

        <div class="grid grid-cols-2 w-full gap-12">
            <DefaultCard v-for="(card, i) in cards" :key="i">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2" v-for="block in card" :key="block.question">
                        <Text fat class="text-white">Q: {{ block.question }}</Text>
                        <Text>A: {{ block.answer }}</Text>
                    </div>
                </div>
            </DefaultCard>
        </div>
    </Container>
</template>

<style scoped>

</style>