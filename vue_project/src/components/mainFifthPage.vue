<template>
    <div class="banner_p3"></div>
    <div class="page5Article">
      <div class="page5Article__block">
        <h1 class="page5Article__title">
        {{ titleP5 }}
      </h1>
      <p class="page5Article__text">
        {{ textP5 }}
      </p> 
      </div>
      
    </div>
   <swiper
      :style="{
        '--swiper-navigation-color': '#black',
        '--swiper-pagination-color': '#black',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in bedRoomArrayP5" :key="index">
        <div  class="swiper-zoom-container">
          <img :src="item"/>
        </div> 
      </swiper-slide>    
    </swiper>
    <div class="empty">
  
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { mapState } from 'vuex';
  
  // import required modules
  import { Zoom, Navigation, Pagination } from 'swiper/modules';
  export default {
      name: 'TaskHomeTest',
  
      data() {
          return {
          };
      },
      computed:{
        ...mapState(['titleP5','textP5','bedRoomArrayP5'])
      },
  
    components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Zoom, Navigation, Pagination],
        };
      },

  };
  </script>
  
  <style lang="scss" scoped>
    .banner_p3{
   
    background-image: url(@/assets/img/BanerPage5.jpg);
    
}
  </style>