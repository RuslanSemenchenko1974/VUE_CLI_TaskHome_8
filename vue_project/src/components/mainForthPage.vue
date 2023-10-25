<template>
    <div>
        <div class="articlesAndNews">
        <div class="articlesAndNews__block">
          <h1 class="articlesAndNews__block__title">Articles & News</h1>
          <p class="articlesAndNews__block__text">Home / Blog</p>
        </div>
      </div>
    </div>


<div class="dfjccaic">
    <div class="page4_menu"> 
        <div v-for="item in tagArray" :id = "item.id" class="page4_menu__tag" @click="ChooseRoom(item)">
            <p class="page4_menu__tag__text">
                {{ item }}
            </p>
        </div>
    </div>
</div>
<div class="pag4_mainBlock">
    <div v-for="item in showRoom" :id = "item.id" class="pag4_mainBlock__item" @click="item.flag=!item.flag">
        <img class="pag4_mainBlock__item__img" :src="item.image" alt="picture">
        <div class="pag4_mainBlock__item__footer">

            <div class="pag4_mainBlock__item__footer__left">
                <h1 class="pag4_mainBlock__item__title">
                    {{item.title}}
                </h1>
                <p class="pag4_mainBlock__item__text">
                    Decor / Artchitecture
                </p>
            </div> 

            <div class="pag4_mainBlock__item__footer__right">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

        </div>
        <div v-if="item.flag" class="pag4_mainBlock__item__star">
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_993_156)">
                <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#FFA928"/>
            </g>
            <defs>
                <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                </filter>
            </defs>
            </svg>
        </div>
        
    </div>


</div>
    <CircleNamber/>
</template>

<script>
import CircleNamber from './CircleNamber.vue';

export default {
    name: 'ProjectVueCliMainForthPage',
    data() {
        return {
            tagArray: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
            flag: false,
            showRoom: [],
            roomArray: [
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom01.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom02.jpg'),
                    title: 'Classic Minimal Bedroom', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom03.jpg'),
                    title: 'Minimal Bedroom table', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom04.jpg'),
                    title: 'Modern Medroom', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom05.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom06.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom07.jpg'),
                    title: 'System Table', flag: false,
                },
                { tag: 'Bed Room',
                    image: require('@/assets/img/img_page4/BedRoom/BedRoom08.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },
                //**************************** */
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom01.jpeg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom02.jpeg'),
                    title: 'Classic Minimal Bedroom', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom03.jpeg'),
                    title: 'Minimal Bedroom table', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom04.jpeg'),
                    title: 'Modern Medroom', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom05.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom06.jpeg'),
                    title: 'Modern Bedroom', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom07.jpg'),
                    title: 'System Table', flag: false,
                },
                { tag: 'Bathroom',
                    image: require('@/assets/img/img_page4/BathRoom/BathRoom08.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },
                //************************************** */
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom01.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom02.jpg'),
                    title: 'Classic Minimal Bedroom', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom03.jpg'),
                    title: 'Minimal Bedroom table', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom04.jpg'),
                    title: 'Modern Medroom', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom05.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom06.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom07.jpg'),
                    title: 'System Table', flag: false,
                },
                { tag: 'Kitchan',
                    image: require('@/assets/img/img_page4/KitchanRoom/KitchenRoom08.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },  
            //********************************************* */ 
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom01.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom02.jpg'),
                    title: 'Classic Minimal Bedroom', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom03.jpg'),
                    title: 'Minimal Bedroom table', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom04.jpg'),
                    title: 'Modern Medroom', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom05.jpg'),
                    title: 'Minimal Bedroom', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom06.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom07.jpg'),
                    title: 'System Table', flag: false,
                },
                { tag: 'Living Area',
                    image: require('@/assets/img/img_page4/LivingRoom/LivingRoom08.jpg'),
                    title: 'Modern Bedroom', flag: false,
                },
            ]
        };
    },
    mounted() {
    },
    methods: {
        ChooseRoom(item) {
            this.showRoom = this.roomArray.filter(perem => perem.tag === item);
        }
    },
    created() {
        this.showRoom = this.roomArray.filter(perem => perem.tag === 'Kitchan');
  },
    components: { CircleNamber }
};
</script>

<style lang="scss" scoped>
.articlesAndNews{    
    background-image: url(@/assets/img/img_page4/page4Baner.jpg);  
}
.btn{    
    margin-bottom: 100px;
}
</style>