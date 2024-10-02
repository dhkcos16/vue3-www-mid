<template>
  <div class="oneTwoSwiper d-flex justify-content-between mt-2">
    <!-- s : 빅배너 swiper -->
    <div class="swiper-bigBnrArea">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :pagination="customPaging"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="swiper in bigBnrSwipers" :key="swiper">
          <a href="javascript:void(0);">
            <img :src="swiper.url" :alt="swiper.title" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <!-- e : 빅배너 swiper -->
    <!-- s : 스몰배너 swiper -->
    <div class="swiper-smBnrArea">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :pagination="customPaging02"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="swiper in smBnrSwipers" :key="swiper">
          <a href="javascript:void(0);">
            <img :src="swiper.url" :alt="swiper.id" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <!-- s : 스몰배너 swiper -->
  </div>
</template>

<script>
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive } from "vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // 빅배너 페이징
    const customPaging = {
      el: ".swiper-bigBnrArea .swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return `<li class="${className}"><a>
          ${bigBnrSwipers[index].title}</a></li>`;
      },
    };
    // 스몰배너 페이징
    const customPaging02 = {
      el: ".swiper-smBnrArea .swiper-pagination",
      type: "fraction",
      clickable: true,
      formatFractionCurrent: (number) => `Page ${number}`,
      formatFractionTotal: (number) => `of ${number}`,
    };
    // Swiper modules
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    // 빅배너 data
    const bigBnrSwipers = reactive([
      {
        title: "중간고사 대비",
        url: "//cdata.milkt.co.kr/UploadFile/BrandWebBanner/6a889070-92c7-4c85-80d3-7525b189bd6a20240903.jpg",
      },
      {
        title: "내신 진도 강좌",
        url: "//cdata.milkt.co.kr/UploadFile/BrandWebBanner/e2d1ece8-557d-4b73-88c3-8158381a357620240709.jpg",
      },
      {
        title: "밀크T IT북",
        url: "//cdata.milkt.co.kr/UploadFile/BrandWebBanner/8ea1ee2d-5975-4aa1-aa79-72b19ee0b46520240321.jpg",
      },
    ]);
    // 스몰배너 data
    const smBnrSwipers = reactive([
      {
        id: 1,
        url: "//cdata.milkt.co.kr/UploadFile/BrandWebBanner/01f778fd-e001-48a1-a2ff-0e6b2d0853ae20240930.jpg",
      },
      {
        id: 2,
        url: "//cdata.milkt.co.kr/UploadFile/BrandWebBanner/d0eed59d-47e3-40a1-88ed-9682459819de20240930.jpg",
      },
    ]);

    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
      customPaging,
      customPaging02,
      bigBnrSwipers,
      smBnrSwipers,
    };
  },
};
</script>
