<template>
  <a href="javascript:;" class="subTopBnrImg">
    <img
      src="//cdata.milkt.co.kr/UploadFile/BrandWebBanner/91a827e4-0303-44e4-90e9-bd790d69f2f120241002.jpg"
      alt=""
    />
  </a>
  <div class="container">
    <div class="row">
      <Sidebar :snbMenus="snbMenus" />
      <div class="col-7">
        입시전략
        <a class="btn bg-colorB" href="#" role="button">
          단계별 입시 전략으로 합격 완성!
          <strong class="font-colorA">일반/특목 컨설팅 프로그램</strong>
        </a>
        <OnetwoSwiper />
      </div>
      <div class="col">quickmenu</div>
    </div>
  </div>
</template>

<script>
import OnetwoSwiper from "@/components/OnetwoSwiper.vue";
import Sidebar from "@/components/Sidebar.vue";
import { reactive } from "vue";
export default {
  components: {
    Sidebar,
    OnetwoSwiper,
  },
  setup() {
    const snbMenus = reactive([
      "특목 클래스",
      "일반/특목 컨설팅",
      "고교 입시전략",
      "특목고 입시전략",
      "대입 전략",
      "학습 전략",
      "진로 정보",
      "시험 정보",
    ]);
    return { snbMenus };
  },
};
</script>
