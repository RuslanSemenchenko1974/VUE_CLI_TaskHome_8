<template> 
<Navigation/>
 <router-view></router-view>
</template>

<script>
import headerSight from './components/headerSight.vue';
import footerSight from './components/footerSight.vue';
import mainTwoPage from './components/mainTwoPage.vue';
import mainFirstPage from './components/mainFirstPage.vue';
import mainThirdPage from './components/mainThirdPage.vue';
import MainForthPage from './components/mainForthPage.vue';
import MainFifthPage from './components/mainFifthPage.vue';
import Navigation from './components/navigation.vue';
export default {  
  components: {
    headerSight,
    footerSight,
    mainTwoPage,
    mainFirstPage,
    mainThirdPage,
    MainForthPage,
    MainFifthPage,
    Navigation
}
}
</script>

<style lang="scss">

</style>
