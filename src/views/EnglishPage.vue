<template>
  <div class="subTopBnrImg">
    <img
      src="//cdata.milkt.co.kr/UploadFile/BrandWebBanner/a4504d0d-547a-4451-a7aa-f2a09fd6538320240930.jpg"
      alt=""
    />
  </div>
  <div class="container">
    <div class="row">
      <Sidebar :snbMenus="snbMenus" />
      <div class="col-7">
        영어중점
        <SearchBar />
        <OnetwoSwiper />
      </div>
      <div class="col">quickmenu</div>
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
