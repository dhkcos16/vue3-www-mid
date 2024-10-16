<template>
  <div class="d-flex justfy-content-between align-items-center">
    <a class="btn btn-primary w-50" href="#" role="button" style="color: #fff"
      >강좌 한눈에 보기</a
    >
    <div
      class="input-group ml-2 p-2 d-flex justfy-content-between align-items-center bg-secondary"
    >
      <label
        for="form-control"
        class="flex-shrink-0 mb-0 mr-1"
        style="font-size: 1rem"
        >빠른 강좌 찾기</label
      >
      <input
        type="text"
        id="form-control"
        class="form-control"
        placeholder="검색어를 입력해주세요."
        aria-label="검색어를 입력해주세요."
        aria-describedby="button-addon2"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          style="background-color: #317cee; color: #fff"
        >
          검색
        </button>
      </div>
    </div>
  </div>
</template>
