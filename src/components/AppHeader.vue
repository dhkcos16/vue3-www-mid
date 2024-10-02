<template>
  <header class="appHeader">
    <img src="../assets/images/appHeader.jpg" alt="appHeader" />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav d-flex justify-content-center flex-fill">
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >천재패스</a
          >
        </li>
        <li :class="['nav-item', isActive('home') ? 'active' : '']">
          <router-link class="nav-link" :to="{ name: 'home' }"
            >내신완성</router-link
          >
        </li>
        <li :class="['nav-item', isActive('math') ? 'active' : '']">
          <router-link class="nav-link" :to="{ name: 'math' }"
            >수학중점</router-link
          >
        </li>
        <li :class="['nav-item', isActive('english') ? 'active' : '']">
          <router-link class="nav-link" :to="{ name: 'english' }"
            >영어중점</router-link
          >
        </li>
        <li :class="['nav-item', isActive('specialty') ? 'active' : '']">
          <router-link class="nav-link" :to="{ name: 'specialty' }"
            >특목자사고</router-link
          >
        </li>
        <li :class="['nav-item', isActive('admission') ? 'active' : '']">
          <router-link class="nav-link" :to="{ name: 'admission' }"
            >입시전략</router-link
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >테스트존</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >선생님</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >나의 학습방</a
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
    const isActive = (routeName) => {
      return route.name === routeName;
    };
    return { isActive };
  },
};
</script>
