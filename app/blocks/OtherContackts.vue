<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import Text from "~/sheared/ui/text/Text.vue"
    import DefaultButton from "~/sheared/ui/DefaultButton.vue"

    interface Contact {
        title: string
        description: string
    }

    const contacts: Contact[] = [
        {
            title: "Телефон",
            description: "+7 951 372-16-52"
        },
        {
            title: "Email",
            description: "info@portal.ru"
        },
        {
            title: "Telegram",
            description: "@portal_support"
        },
        {
            title: "Адрес",
            description: "г. Москва, ул. Бориса Галушкина, 10"
        },
        {
            title: "Время работы",
            description: "Пн-Пт 9:00 - 18:00, Сб 10:00 - 16:00"
        },
    ]

</script>

<template>
    <Container>
        <template #title>Контакты</template>

        <DefaultCard class="w-full gap-6">
            <div class="flex flex-col gap-2" v-for="contact in contacts" :key="contact.title">
                <Text fat class="text-white">{{ contact.title }}</Text>
                <Text>{{ contact.description }}</Text>
            </div>
        </DefaultCard>
    </Container>
</template>

<style scoped>

</style>