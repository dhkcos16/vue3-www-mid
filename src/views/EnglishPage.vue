<template>
  <a href="javascript:;" class="subTopBnrImg">
    <img
      src="//cdata.milkt.co.kr/UploadFile/BrandWebBanner/a4504d0d-547a-4451-a7aa-f2a09fd6538320240930.jpg"
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
    const snbMenus = reactive([
      "문법",
      "독해",
      "듣기",
      "쓰기",
      "어휘",
      "회화",
      "종합",
    ]);
    return { snbMenus };
  },
};
</script>
