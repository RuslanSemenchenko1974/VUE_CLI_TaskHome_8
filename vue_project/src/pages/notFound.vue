<template>
    <div>
        <headerSight/>
        <div class="notFound">
        
        <div class="notFound__left">
            <h1 class="notFound__left__title">404</h1>
            <p class="notFound__left__text">We are sorry, but the page
you requested was not found</p>
<router-link  to="/"> <div class="notFound__left__btn">
            <p class="notFound__left__btn__text">Back To Home</p>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
        </div> </router-link>
        

        </div>

        <div class="notFound__right">
            <img :src="img" alt="404" class="notFound__right__img">
            
        </div>
    </div>    
    </div>
    

</template>

<script>
import headerSight from '../components/headerSight.vue';
export default {
    name: 'RoutingNotFound',

    data() {
        return {
            img : require('@/assets/img/Image404.jpg')
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
    headerSight,
 

}
};
</script>

<style lang="scss" scoped>
    .notFound{
        display: flex;
        justify-content: right;
        &__left{
            width: 569px;
            height: 1042px;
            display: flex;
            flex-direction: column;
            margin-right: 81px;
            &__title{
                color: #CDA274;
                font-family: DM Serif Display;
                font-size: 250px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%; /* 312.5px */
                margin-bottom: 15px;
            }
            &__text{
                color: #292F36;
                font-family: DM Serif Display;
                font-size: 35px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 52.5px */
                letter-spacing: 0.35px;
                margin-bottom: 23px;
            }
            &__btn{
                width: 253px;
                height: 75px;
                border-radius: 18px;
                background: #292F36;
                box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                &__text{
                    color: #FFF;
                    text-align: center;
                    font-family: Jost;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 125%; /* 22.5px */
                    letter-spacing: 0.36px;
                }
            }
        }
        &__right{
            height: 1042px;
            width: 913px;
            &__img{
                width: 100%;
                height: fit-content;
            }
        }
    }

</style>