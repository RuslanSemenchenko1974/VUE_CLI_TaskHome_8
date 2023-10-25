<template>
    <div>
        <headerSight/>
        <mainFirstPage/>
        <footerSight/>
    </div>
</template>

<script>
import mainFirstPage from '../components/mainFirstPage.vue';
import headerSight from '../components/headerSight.vue';
import footerSight from '../components/footerSight.vue';
export default
 {
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
    
    mainFirstPage,
    
   
   
}
};
</script>

<style lang="scss" scoped>

</style>