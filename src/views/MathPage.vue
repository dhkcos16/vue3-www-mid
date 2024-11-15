<template>
  <a href="javascript:;" class="subTopBnrImg">
    <img
      src="//cdata.milkt.co.kr/UploadFile/BrandWebBanner/4091862d-8ebf-4638-8a7a-0fc3aa730fde20240930.jpg"
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
import Sidebar from "@/components/AppSidebar.vue";
import SearchBar from "@/components/SearchBar.vue";
import { reactive } from "vue";
export default {
  components: {
    Sidebar,
    OnetwoSwiper,
    SearchBar,
  },
  setup() {
    const snbMenus = reactive(["기초", "기본", "발전", "마스터"]);
    return { snbMenus };
  },
};
</script>
