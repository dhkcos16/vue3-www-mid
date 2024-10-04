<template>
  <a href="javascript:;" class="subTopBnrImg">
    <img
      src="//cdata.milkt.co.kr/UploadFile/BrandWebBanner/9c8430d8-8d6c-41f8-b0d3-59476f9a37e520240930.jpg"
      alt=""
    />
  </a>
  <div class="container">
    <div class="row">
      <Sidebar :snbMenus="snbMenus" />
      <div class="col-7">
        특목자사고
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
      "영재/과학고",
      "외/국/자사고",
      "입시전략 강의",
      "대치동 공부법",
      "HME/HMC 대비",
    ]);
    return { snbMenus };
  },
};
</script>
