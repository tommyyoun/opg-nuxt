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
                <VideoEmbed slot="nine"/>
            </MainContent>
        </div>
    </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import MainContent from '~/components/_MainContent.vue'

import ChOverview from '~/components/ChOverview.vue'
import ChContent from '~/components/ChContent.vue'
import TextImage from '~/components/TextImage.vue'
import DocHistory from '~/components/DocHistory.vue'
import FAQ from '~/components/FAQ.vue'
import LinkedList from '~/components/LinkedList.vue'
import Accordion from '~/components/Accordion.vue'
import ResTable from '~/components/ResTable.vue'
import VideoEmbed from '~/components/VideoEmbed.vue'

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
    ResTable,
    VideoEmbed
  }
    
}
</script>

<style>
 #backtop {
    position: fixed;
    left: auto;
    right: 20px;
    top: auto;
    bottom: 20px;
    outline: none;
    overflow: hidden;
    color: #fff;
    text-align: center;
    background-color: rgba(154, 205, 50, 0.84);
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s linear;
    z-index: 999999;

    opacity: 1;
    /* display: none; */
}

#backtop:hover {
    background-color: #9ACD32;
}

#backtop.mcOut {
    opacity: 0;
}



</style>