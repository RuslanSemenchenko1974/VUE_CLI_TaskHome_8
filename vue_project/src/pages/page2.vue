<template>
    <div>
        <headerSight/>
        <mainTwoPage/>
        <footerSight/>
    </div>
</template>

<script>
import headerSight from '../components/headerSight.vue';
import mainTwoPage from '../components/mainTwoPage.vue';
import footerSight from '../components/footerSight.vue';

export default {
    name: 'Page2',

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
    mainTwoPage,

}
};
</script>

<style lang="scss" scoped>

</style>