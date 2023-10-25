<template>
    <div>
        <headerSight/>
        <MainFifthPage/>
        <footerSight/>
    </div>
</template>

<script>
import headerSight from '../components/headerSight.vue';
import footerSight from '../components/footerSight.vue';
import MainFifthPage from '../components/mainFifthPage.vue';
export default {
    name: 'Page1',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
    headerSight,
    footerSight,
    MainFifthPage,
   
}
};
</script>

<style lang="scss" scoped>

</style>