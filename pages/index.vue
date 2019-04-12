<template>
  <section>
    <Navbar />

    <MainContainer/>
      

    <Footer />

     
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import MainContainer from '~/components/MainContainer.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Navbar,
    MainContainer,
    Footer
  }
}
</script>

<style>

</style>
