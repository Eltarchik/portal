<script setup lang="ts">

    import MainBlock from "~/blocks/MainBlock.vue"
    import bgStars from "~/assets/imgs/bg-stars.svg"
    import ForBisnesBlock from "~/blocks/ForBisnesBlock.vue"
    import ForUsersBlock from "~/blocks/ForUsersBlock.vue"
    import HowItWorkBlock from "~/blocks/HowItWorkBlock.vue"
    import PricingBlock from "~/blocks/PricingBlock.vue"
    import Advantages from "~/blocks/AdvantagesBlock.vue"
    import Team from "~/blocks/TeamBlock.vue"
    import FAQ from "~/blocks/FAQBlock.vue"
    import Form from "~/blocks/FormBlock.vue"
    import OtherContackts from "~/blocks/OtherContactsBlock.vue";
    import Footer from "~/blocks/FooterBlock.vue";

</script>

<template>
    <div class="flex flex-col items-center w-full min-h-vh bg-gray-100">
        <div class="flex flex-col gap-40 pt-40 items-center w-full h-full stars">
            <MainBlock />
            <ForBisnesBlock />
            <ForUsersBlock />
            <HowItWorkBlock />
            <PricingBlock />
            <Advantages />
            <Team />
            <FAQ />
            <Form />
            <OtherContackts />
            <Footer />
        </div>
    </div>
</template>

<style scoped>
    .stars {
        background-image: url('@/assets/imgs/bg-stars.svg');
    }
</style>