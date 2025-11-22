<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import Text from "~/sheared/ui/text/Text.vue";
    import DefaultButton from "~/sheared/ui/DefaultButton.vue";



</script>

<template>
    <Container>
        <template #title>Получите полное демо</template>
        <template #description>Для этого просто заполните форму</template>

        <div class="flex flex-col gap-12 w-full">
            <div class="flex flex-col gap-6 w-185">

            </div>
            <div class="flex flex-col gap-4">
                <DefaultButton small class="w-fit">Получить демо</DefaultButton>
                <Text>После отправки формы: Наш менеджер позвонит в течение 2 часов</Text>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>