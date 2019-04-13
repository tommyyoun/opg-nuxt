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

export default {
    components: {
    Sidebar,
    MainContent,
    ChOverview,
    ChContent,
    TextImage,
    DocHistory,
    FAQ
  }
    
}
</script>

<style>

</style>