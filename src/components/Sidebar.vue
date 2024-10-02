<template>
  <div class="col snb pt-4">
    <div class="list-group">
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    snbMenus: {
      type: Array,
      required: true,
    },
  },
};
</script>
