<template>
   <div class="banner">
    <div class="Let_Your_Home">
        <h1 class="Let_Your_Home__header">
            Let Your Home <br>Be Unique
        </h1>
        <p class="Let_Your_Home__text">
            There are many variations of the passages of
    lorem Ipsum fromavailable, majority.
        </p>
        <button class="Let_Your_Home__btn"> 
            Get Started <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
              </svg>
        </button>
    </div>
</div>

<h1 class="FollowProject">Follow Our Projects</h1>
<p class="FollowProject__text">It is a long established fact that a reader will be distracted by the of readable <br> content of page  lookings at its layouts  points.</p>

<div class="examples" >
     <div v-for="item in arrayOfImg" :key="item.id" class="modernKitchen">
        <img class="modernKitchen__img" :src="item" alt="Image">
        <div class="modernKitchen__content">
            <div class="modernKitchen_content_left">
                <p class="modernKitchen__header">Modern Kitchan</p>
                <p class="modernKitchen__text">Decor / Artchitecture</p>
            </div>
            <div class="modernKitchen_content_right">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>        
    </div>
</div>

<div class="statistic">
    <div class="statistic__info">
        <h1 class="statistic__info__number">12</h1>
        <p class="statistic__info__text">
            Years Of Experiance
        </p>
    </div>
    <img class="line" src="@/assets/img/Line.svg" alt="line">
    <div class="statistic__info">
        <h1 class="statistic__info__number">85</h1>
        <p class="statistic__info__text">
            Success Project
        </p>
    </div>
    <img class="line" src="@/assets/img/Line.svg" alt="line">
    <div class="statistic__info">
        <h1 class="statistic__info__number">15</h1>
        <p class="statistic__info__text">
            Active Project
        </p>
    </div>
    <img class="line" src="@/assets/img/Line.svg" alt="line">
    <div class="statistic__info">
        <h1 class="statistic__info__number">95</h1>
        <p class="statistic__info__text">
            Happy CUstomers
        </p>
    </div>
</div>

<h2 class="Articles_News_p1">Articles & News</h2>
<p class="Articles_News_p1__text">It is a long established fact that a reader will be distracted by the of readable content <br> of a page when lookings at its layouts the points of using.</p>

<div class="threeItem_p1" id="hello-vue1">
    <div v-for="item in arrayOfImg3" :key="item.id" class="item">
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
</template>

<script>

    export default {
        data() {
            return {
                arrayOfImg3:[
                    {image:require('@/assets/img/image_3_p1/Image1.jpg'), title:'Let’s Get Solution For Building Construction Work', design:'Kitchan Design'}, 
                    {image:require('@/assets/img/image_3_p1/Image2.jpg'), title:'Low Cost Latest Invented Interior Designing Ideas', design:'Living Design'}, 
                    {image:require('@/assets/img/image_3_p1/Image3.jpg'), title:'Best For Any Office & Business Interior Solution', design:'Interior Design'}],
                    arrayOfImg:
                    [
                    require('@/assets/img/image_4/Image1.jpg'), 
                    require('@/assets/img/image_4/Image2.jpg'), 
                    require('@/assets/img/image_4/Image3.jpg'), 
                    require('@/assets/img/image_4/Image4.jpg')],
            };
        },
    }
</script>