<template>
  <header class="appHeader">
    <img src="@/assets/images/appHeader.jpg" alt="appHeader" />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav d-flex justify-content-center flex-fill">
        <li
          v-for="item in navItems"
          :key="item.name"
          :class="['nav-item', isActive(item.name) ? 'active' : '']"
        >
          <router-link
            v-if="!item.disabled"
            class="nav-link"
            :to="{ name: item.name }"
            >{{ item.label }}</router-link
          >
          <a
            v-else
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >{{ item.label }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "AppHeader",
  setup() {
    const route = useRoute();

    // 네비게이션 항목 배열
    const navItems = [
      { name: "geniusPass", label: "천재패스", disabled: true },
      { name: "home", label: "내신완성", disabled: false },
      { name: "math", label: "수학중점", disabled: false },
      { name: "english", label: "영어중점", disabled: false },
      { name: "specialty", label: "특목자사고", disabled: false },
      { name: "admission", label: "입시전략", disabled: false },
      { name: "testZone", label: "테스트존", disabled: true },
      { name: "teachers", label: "선생님", disabled: true },
      { name: "studyRoom", label: "나의 학습방", disabled: true },
    ];

    const isActive = (routeName) => route.name?.startsWith(routeName);

    return { isActive, navItems };
  },
};
</script>
