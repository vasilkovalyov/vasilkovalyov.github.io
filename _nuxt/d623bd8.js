(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{522:function(t,e,r){var content=r(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("62a183a0",content,!0,{sourceMap:!1})},523:function(t,e,r){var content=r(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("5f98854a",content,!0,{sourceMap:!1})},615:function(t,e,r){"use strict";r(522)},616:function(t,e,r){var o=r(14)(!1);o.push([t.i,'.project-slider__image[data-v-7b6712e5]{height:61vw}@media(min-width:768px){.project-slider__image[data-v-7b6712e5]{height:485px}}.project-slider__image img[data-v-7b6712e5]{max-height:485px;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.project-slider .swiper-container[data-v-7b6712e5]{overflow:visible}.project-slider .swiper-slide[data-v-7b6712e5]{position:relative}.project-slider .swiper-button[data-v-7b6712e5]{transition:transform .3s ease-in-out;color:#000}.project-slider .swiper-button[data-v-7b6712e5]:hover{transform:scale(1.2)}.project-slider .swiper-button[data-v-7b6712e5]:after{color:inherit}.project-slider .swiper-button.swiper-button-disabled[data-v-7b6712e5]{display:none}.project-slider .swiper-button-next[data-v-7b6712e5]{right:20px}@media(min-width:1024px){.project-slider .swiper-button-next[data-v-7b6712e5]{right:-40px}}.project-slider .swiper-button-prev[data-v-7b6712e5]{left:20px}@media(min-width:1024px){.project-slider .swiper-button-prev[data-v-7b6712e5]{left:-40px}}.project-slide[data-v-7b6712e5]{position:relative;color:#fff;font-family:"Montserrat"}.project-slide.swiper-slide-active[data-v-7b6712e5]:hover{cursor:pointer}.project-slide.swiper-slide-active:hover .project-slide__overlay[data-v-7b6712e5]{background:rgba(0,0,0,.4);transition:background-color .3s ease-in .3s}.project-slide.swiper-slide-active:hover .project-slide__description[data-v-7b6712e5],.project-slide.swiper-slide-active:hover .project-slide__title[data-v-7b6712e5]{opacity:1;transform:translateX(0);transition:opacity .3s ease-in .3s,transform .3s ease-in .3s}.project-slide__overlay[data-v-7b6712e5]{position:absolute;top:0;left:0;width:100%;height:100%;background:transparent;display:flex;align-items:center;justify-content:center;flex-direction:column;transition:background-color .3s ease-out .3s}.project-slide__title[data-v-7b6712e5]{transform:translateX(-150px)}.project-slide__description[data-v-7b6712e5],.project-slide__title[data-v-7b6712e5]{opacity:0;transition:opacity .3s ease-out .3s,transform .3s ease-out .3s}.project-slide__description[data-v-7b6712e5]{transform:translateX(150px)}.project-slide__link[data-v-7b6712e5]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%}',""]),t.exports=o},617:function(t,e,r){"use strict";r(523)},618:function(t,e,r){var o=r(14)(!1);o.push([t.i,".projects-page{padding:40px 0}.projects-page .container{max-width:800px}",""]),t.exports=o},699:function(t,e,r){"use strict";r.r(e);r(449);var o=r(494),n=(r(495),{name:"IntroSlider",props:{slides:{type:Array,required:!0}},components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},data:function(){return{swiperOptions:{centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},spaceBetween:50,speed:1e3,autoResize:!0}}}}),l=(r(615),r(21)),c={head:{title:"Kulygin Design - Проекты"},data:function(){return{projects:[]}},mounted:function(){this.$store.dispatch("loadProjects")},computed:{getProjects:function(){return this.$store.getters.getProjects},getLoadStatusOfProducts:function(){return this.$store.getters.getLoadStatusOfProducts}},components:{ProjectSlider:Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.slides?r("div",{staticClass:"project-slider"},[r("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.slides,(function(e){return r("swiper-slide",{key:e.id,staticClass:"project-slide"},[r("div",{staticClass:"project-slider__image"},[r("img",{attrs:{src:e.image,alt:e.title}}),t._v(" "),r("div",{staticClass:"project-slide__overlay"},[r("span",{staticClass:"project-slide__title"},[t._v(t._s(e.title))]),t._v(" "),r("nuxt-link",{staticClass:"project-slide__link",attrs:{to:"/projects/"+e.id}})],1)])])})),t._v(" "),r("span",{staticClass:"swiper-button swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("span",{staticClass:"swiper-button swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1):t._e()}),[],!1,null,"7b6712e5",null).exports}},d=(r(617),Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"projects-page"},[r("div",{staticClass:"container"},[r("section-title",{attrs:{title:"Проекты"}}),t._v(" "),t.getLoadStatusOfProducts?r("div",{staticClass:"projects-page__content"},[r("project-slider",{attrs:{slides:t.getProjects}})],1):t._e()],1)])}),[],!1,null,null,null));e.default=d.exports}}]);