<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"

    interface Entry {
        before: string
        after: string
    }

    const table: Entry[] = [
        {
            before: "900 000+ руб/год",
            after: "100 000 руб. /год"
        },
        {
            before: "2-3 охранника на смену",
            after: "0-1 охранник"
        },
        {
            before: "2-3 минуты на авто",
            after: "5-10 секунд"
        },
        {
            before: "Постоянные очные проверки",
            after: "Автоматические отчеты"
        },
        {
            before: "10+ жалоб в месяц",
            after: "1-2 жалобы в месяц"
        }
    ]

</script>

<template>
    <Container>
        <template #title>Преимущества для бизнеса</template>
        <template #description>
            Что изменилось?
        </template>

        <div class="flex flex-col items-center gap-16">
            <div class="grid grid-cols-2 gap-4 w-full">
                <DefaultCard class="col-span-1">
                    <Header class="self-center" :size="HeaderSize.MEDIUM">Было</Header>
                </DefaultCard>
                <GlassCard class="col-span-1">
                    <Header class="self-center" :size="HeaderSize.MEDIUM">Стало</Header>
                </GlassCard>
            </div>
            <div class="flex flex-col gap-6 w-full">
                <div v-for="entry in table" class="grid grid-cols-2 gap-4 w-full">
                    <DefaultCard class="col-span-1">
                        <Header class="self-center" :size="HeaderSize.SMALL">{{ entry.before }}</Header>
                    </DefaultCard>
                    <GlassCard class="col-span-1">
                        <Header class="self-center" :size="HeaderSize.SMALL">{{ entry.after }}</Header>
                    </GlassCard>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>