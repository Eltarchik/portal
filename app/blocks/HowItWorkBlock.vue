<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import PortalText from "~/sheared/ui/text/PortalText.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue"
    import help from "~/assets/imgs/cards/help.svg"

</script>

<template>
    <Container>
        <template #title>Как работает <PortalText />?</template>
        <template #description>
            Полная автоматизация в три этапа
        </template>

        <div class="flex flex-col items-center gap-20">
            <div class="grid grid-cols-3 gap-6 w-full">
                <GlassCard class="col-span-1 h-80">
                    <template #title><b class="text-[60px]/[]">I</b><br/> Захват номера</template>
                    <template #description>
                        Камера фиксирует номер авто.<br/>
                        ИИ-модель распознает номер в любых условиях.<br/>
                        Система отправляет данные на сервер
                    </template>
                    <img :src="help" alt="" width="400" class="absolute min-w-100 left-0 top-58 blur-[12px]">
                </GlassCard>
                <GlassCard class="col-span-1 h-80">
                    <template #title><b class="text-[60px]">II</b><br/> Проверка и допуск</template>
                    <template #description>
                        Номер проверяется в базе жильцов.<br/>
                        Шлагбаум автоматически открывается.<br/>
                        История всех проездов записывается
                    </template>
                    <img :src="help" alt="" width="400" class="absolute min-w-100 left-[-32px] top-60 blur-[12px] rotate-8">
                </GlassCard>
                <GlassCard class="col-span-1 h-80">
                    <template #title><b class="text-[60px]">III</b><br/> Аналитика и управление</template>
                    <template #description>
                        Администратор видит все машины двора.<br/>
                        Контролирует въезды/выезды, добавляет авто в чёрный список.<br/>
                        Получает статистику по гостям
                    </template>
                    <img :src="help" alt="" width="400" class="absolute min-w-100 left-[-16px] top-64 blur-[12px] rotate-4 z-[-10]">
                </GlassCard>
            </div>

            <div class="flex flex-col items-center gap-8">
                <Header :size="HeaderSize.MEDIUM">Основной функционал</Header>
                <div class="grid grid-cols-3 grid-rows-2 gap-6 w-full">
                    <DefaultCard class="col-span-1">
                        <template #title>Распознавание номеров</template>
                        <template #description>
                            >99% в любых условиях
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Автоматический пропуск</template>
                        <template #description>
                            Жильцы проходят без охраны
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Полная аналитика</template>
                        <template #description>
                            Статистика и история движения
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Черный список</template>
                        <template #description>
                            Мгновенная блокировка нежелательных авто
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Управление гостями</template>
                        <template #description>
                            Доступ в 2 клика через приложение
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Интеграция</template>
                        <template #description>
                            Работает с существующими шлагбаумами
                        </template>
                    </DefaultCard>
                </div>
            </div>

            <div class="flex flex-col items-center gap-8">
                <Header :size="HeaderSize.MEDIUM">Уникальные преимущества</Header>
                <div class="grid grid-cols-3 grid-rows-2 gap-6 w-full">
                    <DefaultCard class="col-span-1">
                        <template #title>Окупаемость</template>
                        <template #description>
                            6-12 месяцев: экономия на ФОТ
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Простая интеграция</template>
                        <template #description>
                            Подключается к существующим
                            шлагбаумам через API
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Масштабируемость</template>
                        <template #description>
                            От 1 до 1000+ КПП одновременно
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Адаптация под РФ</template>
                        <template #description>
                            Учет российских номеров,
                            климата и законодательства
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Точечное решение</template>
                        <template #description>
                            Платите только за
                            распознавание номеров
                        </template>
                    </DefaultCard>
                    <DefaultCard class="col-span-1">
                        <template #title>Техническая поддержка</template>
                        <template #description>
                            Команда разработчиков
                            работает 24/7
                        </template>
                    </DefaultCard>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>

</style>