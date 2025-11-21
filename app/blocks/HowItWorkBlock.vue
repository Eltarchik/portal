<script setup lang="ts">

    import Container from "~/sheared/ui/Container.vue"
    import PortalText from "~/sheared/ui/text/PortalText.vue"
    import Header, {HeaderSize} from "~/sheared/ui/text/Header.vue"
    import GlassCard from "~/sheared/ui/GlassCard.vue"
    import DefaultCard from "~/sheared/DefaultCard.vue";

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
                    <template #title>Адын<br/> Захват номера</template>
                    <template #description>
                        Камера фиксирует номер авто.<br/>
                        ИИ-модель распознает номер в любых условиях.<br/>
                        Система отправляет данные на сервер
                    </template>
                </GlassCard>
                <GlassCard class="col-span-1 h-80">
                    <template #title>Два<br/> Проверка и допуск</template>
                    <template #description>
                        Номер проверяется в базе жильцов.<br/>
                        Шлагбаум автоматически открывается.<br/>
                        История всех проездов записывается
                    </template>
                </GlassCard>
                <GlassCard class="col-span-1 h-80">
                    <template #title>Тыри<br/> Аналитика и управление</template>
                    <template #description>
                        Администратор видит все машины двора.<br/>
                        Контролирует въезды/выезды, добавляет авто в чёрный список.<br/>
                        Получает статистику по гостям
                    </template>
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