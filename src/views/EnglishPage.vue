<template>
  <div class="container">
    <div class="row">
      <Sidebar :snbMenus="snbMenus" />
      <div class="col-7">
        영어중점
        <OnetwoSwiper
          :bigBnrSwipers="bigBnrSwipers"
          :smBnrSwipers="smBnrSwipers"
        />
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
