<template>
    <div>
        <headerSight/>
        <MainForthPage/>
        <footerSight/>
    </div>
</template>

<script>
import headerSight from '../components/headerSight.vue';
import footerSight from '../components/footerSight.vue';
import MainForthPage from '../components/mainForthPage.vue';
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
    MainForthPage,

}
};
</script>

<style lang="scss" scoped>

</style>