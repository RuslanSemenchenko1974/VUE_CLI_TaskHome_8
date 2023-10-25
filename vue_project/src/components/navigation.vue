<template>
    <nav class="nav">       
       <router-link v-for="link in pageArray" :key="link.id" :to="link.url"> {{ link.name }}</router-link>
   </nav>
    
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return {
            pageArray:[
                {   id:0,
                    name:'page1',
                    url:'/'
                },
                {   id:1,
                    name:'page2',
                    url:'page2'
                },{   id:2,
                    name:'page3',
                    url:'page3'
                },{   id:3,
                    name:'page4',
                    url:'page4'
                },{   id:4,
                    name:'page5',
                    url:'page5'
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .nav{

        display: flex;
        gap: 10px;
        font-size: 25px;
        font-family: DM Serif Display;
        color: #292F36;
    }
</style>