<template>
  <a href="javascript:;" class="subTopBnrImg">
    <img
      src="//cdata.milkt.co.kr/UploadFile/BrandWebBanner/f9854051-2687-415b-bb85-69b0e65dcc9320240930.jpg"
      alt=""
    />
  </a>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-2 snb pt-4">
        <Sidebar :snbMenus="snbMenus" />
      </div>
      <div class="col-7 pt-4">
        <SearchBar />
        <OnetwoSwiper />
      </div>
      <div class="col-2">quickmenu</div>
    </div>
  </div>
</template>

<script>
import OnetwoSwiper from "@/components/OnetwoSwiper.vue";
import Sidebar from "@/components/Sidebar.vue";
import SearchBar from "@/components/SearchBar.vue";
import { reactive } from "vue";
export default {
  components: {
    Sidebar,
    OnetwoSwiper,
    SearchBar,
  },
  setup() {
    const snbMenus = reactive([
      "1학기 기말고사 시험대비 특강",
      "학년별 강좌",
      "원픽짤강",
      "수행평가",
      "자격증/인증시험 과정",
      "자기주도학습 과정",
    ]);

    return { snbMenus };
  },
};
</script>
