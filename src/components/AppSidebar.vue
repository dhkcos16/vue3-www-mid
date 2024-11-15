<template>
  <!-- <div class="list-group">
      <a
        v-for="menu in snbMenus"
        :key="menu"
        href="#"
        class="list-group-item list-group-item-action d-flex w-100 justify-content-between align-items-center"
      >
        <span style="word-break: keep-all">{{ menu }}</span>
        <span class="material-icons keyboard_arrow_down ml-1">
          keyboard_arrow_down
        </span>
      </a>
    </div> -->

  <div class="accordion" id="accordionExample">
    <div
      class="accordion-item"
      v-for="(menu, menuIdx) in snbMenus"
      :key="menuIdx"
    >
      <h2 class="accordion-header" :id="`heading-${menuIdx}`">
        <button
          class="accordion-button"
          :class="{ collapsed: activeIndex !== menuIdx }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${menuIdx}`"
          :aria-expanded="activeIndex === menuIdx"
          :aria-controls="`collapse-${menuIdx}`"
          @click="toggleShow(menuIdx)"
        >
          {{ menu }}
        </button>
      </h2>
      <div
        :id="`collapse-${menuIdx}`"
        class="accordion-collapse collapse"
        :class="{ show: activeIndex === menuIdx }"
        :aria-labelledby="`heading-${menuIdx}`"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              {{ menu }}-1
            </a>
            <a href="#" class="list-group-item list-group-item-action"
              >{{ menu }}-2</a
            >
            <a
              class="list-group-item list-group-item-action disabled"
              aria-disabled="true"
              >{{ menu }}-3</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    snbMenus: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const activeIndex = ref(null);

    const toggleShow = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };
    return {
      activeIndex,
      toggleShow,
    };
  },
};
</script>

<style scoped>
.accordion-body {
  padding: 0;
}
.list-group-item {
  font-family: "SUIT-Regular";
  border: 0;
}
.list-group-item + .list-group-item {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
