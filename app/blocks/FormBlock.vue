<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import Text from "~/sheared/ui/text/Text.vue"
    import DefaultButton from "~/sheared/ui/DefaultButton.vue"
    import DefaultInput from "~/sheared/ui/inputs/DefaultInput.vue"
    import Dropdown, {type DropdownItem} from "~/sheared/ui/inputs/Dropdown.vue"
    import { submitForm, type FormData } from "~/sheared/api/Form"

    const name = ref<string>()
    const phone = ref<string>()
    const organisationName = ref<string>()
    const organisationType = ref<DropdownItem | null>()
    const objectsCount = ref<number | null>()

    const organisationTypes: DropdownItem[] = [
        {
            title: "Управляющая компания",
            name: "1"
        },
        {
            title: "Застройщик",
            name: "2"
        },
        {
            title: "Охранное предприятие",
            name: "3"
        },
        {
            title: "Другое",
            name: "4"
        },
    ]

    const allFieldsValid = computed<boolean>(() => {
        return !!(name.value && phone.value && organisationName.value
            && organisationType.value && objectsCount.value)
    })

    const submit = async () => {
        const form: FormData = {
            name: name.value!!,
            phone: phone.value!!,
            organisation_name: organisationName.value!!,
            organisation_type: +organisationType.value!!.name,
            objects: +(objectsCount.value || 0)
        }

        await submitForm(form)

        name.value = ""
        phone.value = ""
        organisationName.value = ""
        organisationType.value = null
        objectsCount.value = null
    }

</script>

<template>
    <Container>
        <template #title>Получите полное демо</template>
        <template #description>Для этого просто заполните форму</template>

        <div class="flex flex-col items-center gap-12 w-full">
            <div class="flex flex-col gap-6 w-120">
                <DefaultInput v-model="name" placeholder="ФИО" name="name" />
                <DefaultInput v-model="phone" placeholder="Телефон" name="phone" />
                <DefaultInput v-model="organisationName" placeholder="Название компании" name="organisation" />
                <Dropdown v-model="organisationType" :items="organisationTypes" placeholder="Тип организации" />
                <DefaultInput v-model="objectsCount" type="number" placeholder="Количество объектов" name="objects-count" />
                <DefaultButton small :disabled="!allFieldsValid"
                               @click="submit"
                >
                    Получить демо
                </DefaultButton>
                <Text class="text-center">После отправки формы: Наш менеджер позвонит в течение 2 часов</Text>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>