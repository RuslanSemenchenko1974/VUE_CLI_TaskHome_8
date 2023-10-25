<template>
<div class="banner_p3"></div>

<div class="block_Articles">
        <article v-for="item in showArticle" :key="item.id" class="articles">
            <h1 class = "articles__title">
                {{item.title1}}
            </h1>
            <img :src="item.image1" alt="photo" class="articles__foto">
            <div class="articles__ref_menu">
                <div class="articles__ref_menu__left">
                    <p class="articles__ref_menu__left__text">26 December,2022</p>
                </div>
               
                    <ul class="articles__ref_menu__right">
                        <li class="articles__ref_menu__right-li"><a href="#" class="articles__ref_menu__right-li_ref">Interior</a></li>
                        <li class="articles__ref_menu__right-li"><a href="#" class="articles__ref_menu__right-li_ref">Home</a></li>
                        <li class="articles__ref_menu__right-li"><a href="#" class="articles__ref_menu__right-li_ref">Decore</a></li>       
                    </ul>
                
            </div>

            <p class="articles__someText">
                {{item.text1}}
            </p> 
            <div class="articles__advertisment">
                <img src="@/assets/img/commas.svg" alt="commas">
                <p class="articles__advertisment__text">
                    The details are not the details. <br>
                They make the design.
                </p>
            </div>
            <h1 class="articles__title">
              {{item.title2}}
            </h1>
            <p class="articles__someText">
                {{item.text2}}
            </p>
            <ul class="articles__ul markers">
                <li class="articles__someText">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                <li class="articles__someText">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                <li class="articles__someText">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ul>
            <img class="articles__foto" :src="item.image2" alt="Photo2.jpg">
            <p class="articles__someText">
                {{item.text3}}
            </p>

        </article>

        <div class="tags">
            <h2 class="tags__title">Tags</h2>
            <div v-for="item in tags" :key="item.id" @click="choose(item)" class="tags__btn">
               <p class="tags__btn__text">{{item}}</p> 
            </div>
        </div>
    </div>

    

</template>

<script>

    export default {
        data() {
            return {
                tags:['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
            articlesArray:[              
              { tag :'Kitchen',
                title1:'Let’s Get Solution for Building  Construction Work',
                image1:require('@/assets/img/art_img/Photo1.jpg'),
                text1:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                title2:' Design sprints are great',
                text2:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                image2:require('@/assets/img/art_img/Photo2.jpg'),
                text3:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
              },
              { tag :'Bedroom',
                title1:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                image1:require('@/assets/img/art_img/bedroom.jpeg'),
                text1:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                title2:'Lorem ipsum dolor sit amet.',
                text2:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. but the majority have suffered.", 
                image2:require('@/assets/img/art_img/bedroom.jpeg'),        
                text3:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. variations of passages of Lorem Ipsum available, but the majority have suffered."
              },
              { tag :'Building',
                title1:'All the Lorem Ipsum generators on the Internet tend',
                image1:require('@/assets/img/art_img/Building.jpg'),
                text1:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                title2:'Embarrassing hidden in the middle',
                text2:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. but the majority have suffered.", 
                image2:require('@/assets/img/art_img/Building.jpg'),        
                text3:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. variations of passages of Lorem Ipsum available, but the majority have suffered."
              },
              { tag :'Architecture',
                title1:'Architecture generators on the Internet tend',
                image1:require('@/assets/img/art_img/arch.jpg'),
                text1:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                title2:'Lorem ipsum dolor sit amet, adipiscing Aliquam',
                text2:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. but the majority have suffered.", 
                image2:require('@/assets/img/art_img/arch.jpg'),        
                text3:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. variations of passages of Lorem Ipsum available, but the majority have suffered."
              },
              {tag :'Kitchen Planning',
                title1:'Kitchen Planning on the Internet tend',
                image1:require('@/assets/img/art_img/arch.jpg'),
                text1:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                title2:'Kitchen Planning adipiscing Aliquam',
                text2:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available,  alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. but the majority have suffered.", 
                image2:require('@/assets/img/art_img/arch.jpg'),        
                text3:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. variations of passages of Lorem Ipsum available, but the majority have suffered."
              },
            ],
            showArticle:[{tag :'Kitchen',
                title1:'Let’s Get Solution for Building  Construction Work',
                image1:require('@/assets/img/art_img/Photo1.jpg'),
                text1:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                title2:' Design sprints are great',
                text2:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                image2:require('@/assets/img/art_img/Photo2.jpg'),
                text3:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
              }],
            };
        },
        methods: {
          choose(item){
            //this.showArticle=[];
            this.showArticle =this.articlesArray.filter(perem => perem.tag === item);
          }
        },
    }
</script>