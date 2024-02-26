<template>
  <div class="sidebar">
    <!-- 左側選單 -->
    <router-link to="/" class="router-button">Home Index</router-link>
    <router-link to="/learn/Java" class="router-button">Java Test</router-link>
    <div id="sidebarAccordion" class="accordion">
      <!-- Intro -->
      <div class="accordion-item">
        <h2 id="headingIntro" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseIntro"
            aria-expanded="false"
            aria-controls="collapseIntro"
          >
            Intro
          </button>
        </h2>
        <div
          id="collapseIntro"
          class="accordion-collapse collapse"
          aria-labelledby="headingIntro"
          data-bs-parent="#sidebarAccordion"
        >
          <div class="accordion-body">
            <router-link to="/intro/CaerusIntro" class="router-button"
              >Intro</router-link
            >
          </div>
        </div>
      </div>
      <!-- Learn -->
      <div class="accordion-item">
        <h2 id="headingLearn" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLearn"
            aria-expanded="false"
            aria-controls="collapseLearn"
          >
            Learn
          </button>
        </h2>
        <div
          id="collapseLearn"
          class="accordion-collapse collapse"
          aria-labelledby="headingLearn"
          data-bs-parent="#sidebarAccordion"
        >
          <div class="accordion-body">
            <router-link to="/learn/Java" class="router-button"
              >Java 1</router-link
            >
            <router-link to="/learn/JavaScript" class="router-button"
              >JavaScript 2</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <!-- 右側內容插槽 -->
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
  margin-right: 20px;
}

.content {
  flex: 1;
  margin-left: 20px;
}

/* 按鈕樣式 */
.router-button {
  display: block;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 8px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  text-align: center; /* 文字居中 */
  text-decoration: none; /* 移除下方底線 */
}

.router-button:hover {
  background-color: #999;
  color: #fff;
}
</style>
