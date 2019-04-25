<template>
    <div class="container main">
        <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar />
            <MainContent>
                <ChOverview slot="one"/>
                <ChContent slot="two"/>
                <TextImage slot="three"/>
                <DocHistory slot="four"/>
                <FAQ slot="five"/>
                <LinkedList slot="six"/>
                <Accordion slot="seven"/>
                <ResTable slot="eight"/>
            </MainContent>
        </div>
    </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import MainContent from '~/components/MainContent.vue'

import ChOverview from '~/components/ChOverview.vue'
import ChContent from '~/components/ChContent.vue'
import TextImage from '~/components/TextImage.vue'
import DocHistory from '~/components/DocHistory.vue'
import FAQ from '~/components/FAQ.vue'
import LinkedList from '~/components/LinkedList.vue'
import Accordion from '~/components/Accordion.vue'
import ResTable from '~/components/ResTable.vue'

export default {
    components: {
    Sidebar,
    MainContent,
    ChOverview,
    ChContent,
    TextImage,
    DocHistory,
    FAQ,
    LinkedList,
    Accordion,
    ResTable
  }
    
}
</script>

<style>

</style>