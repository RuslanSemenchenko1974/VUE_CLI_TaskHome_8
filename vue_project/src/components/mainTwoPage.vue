<template>
     <div class="articlesAndNews">
        <div class="articlesAndNews__block">
          <h1 class="articlesAndNews__block__title">Articles & News</h1>
          <p class="articlesAndNews__block__text">Home / Blog</p>
        </div>
      </div>

      <div class="latistPost">
        <h1 class="latistPost__left__header">Latest Post</h1>
  
        <div class="latistPost__twoItem">
          <div class="latistPost__left">
            <img
              class="latistPost__left__img"
              src="@/assets/img/LatistPost.jpg"
              alt="LatistPost.jpg"
            />
          </div>
  
          <div class="latistPost__right">
            <h3 class="latistPost__right__title">
              Low Cost Latest Invented Interior <br />
              Designing Ideas
            </h3>
            <p class="latistPost__right__text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief. <br><br> Lorem Ipsum
              is not simply random text. It has roots in a piece of classica.
            </p>
  
            <div class="item__bottom1">
              <div class="item__bottom1__left">
                  <p class="item__bottom1__text1">26 December,2022 </p>
              </div>
              <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                  <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>            
            </div>
          </div>
        </div>
      </div>

      <h2 class="Articles_News">Articles & News</h2>

      <div class="threeItem">
        <div v-for="item in arrayOfImg" :key="item.id" class="item">
            <img class="item__img" :src="item.image" alt="picture">
            <h3 class="item__title">
                {{item.title}}
            </h3>
            <div class="item__bottom">
                <div class="item__bottom__left">
                    <p class="item__bottom__text">26 December,2022 </p>
                </div>
                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="circle" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                
            </div>
            <div class="item__design">
                <p class = "item__design__text">{{item.design}}</p>
            </div>
        </div>
    </div>

    <div class="btn">
      <div class="btn__circle">01</div>
      <button class="btn__circle">02</button>
      <button class="btn__circle">03</button>
          
      <svg class="svg_btn" width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  
    </div>
    
</template>

<script>

    export default {
        data() {
            return {
                arrayOfImg:[
                    {image:require('@/assets/img/image_3/Image1.jpg'), title:'Let’s Get Solution For Building Construction Work', design:'Kitchan Design'}, 
                    {image:require('@/assets/img/image_3/Image2.jpg'), title:'Low Cost Latest Invented Interior Designing Ideas', design:'Living Design'}, 
                    {image:require('@/assets/img/image_3/Image3.jpg'), title:'Best For Any Office & Business Interior Solution', design:'Interior Design'},
                    {image:require('@/assets/img/image_3/Image4.jpg'), title:'Let’s Get Solution For Building Construction Work', design:'Kitchan Design'},
                    {image:require('@/assets/img/image_3/Image5.jpg'), title:'Low Cost Latest Invented Interior Designing Ideas', design:'Living Design'}, 
                    {image:require('@/assets/img/image_3/Image3.jpg'), title:'Best For Any Office & Business Interior Solution', design:'Interior Design'}],
          
            };
        },
        methods: {},
       
    }
</script>

<style scoped lang="scss">

</style>