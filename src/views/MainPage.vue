<template>
  <div class="container">
    <div class="row">
      <Sidebar :snbMenus="snbMenus" />
      <div class="col-7">
        내신완성
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
