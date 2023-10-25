<template>
    <div>
        <headerSight/>
        <mainThirdPage/>
        <footerSight/>
    </div>
</template>

<script>
import headerSight from '../components/headerSight.vue';
import footerSight from '../components/footerSight.vue';
import mainThirdPage from '../components/mainThirdPage.vue';
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
    mainThirdPage,
  
}
};
</script>

<style lang="scss" scoped>

</style>