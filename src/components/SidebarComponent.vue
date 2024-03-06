<template>
  <div class="sidebar">
    <!-- 左側選單 -->
    <router-link to="/" class="router-button">Home Index</router-link>
    <router-link to="/learn" class="router-button">Learn Intro</router-link>
    <div id="accordionExample" class="accordion">
      <div class="accordion-item">
        <h2 id="headingOne" class="accordion-header">
          <button
            :class="{
              'accordion-button': true,
              collapsed: !accordionState['collapseOne'],
            }"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            :aria-expanded="accordionState['collapseOne']"
            @click="toggleAccordion('collapseOne')"
          >
            Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          :class="{ show: accordionState['collapseOne'] }"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ accordionContent["collapseOne"] }}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingTwo" class="accordion-header">
          <button
            :class="{
              'accordion-button': true,
              collapsed: !accordionState['collapseTwo'],
            }"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            :aria-expanded="accordionState['collapseTwo']"
            @click="toggleAccordion('collapseTwo')"
          >
            Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          :class="{ show: accordionState['collapseTwo'] }"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ accordionContent["collapseTwo"] }}
          </div>
        </div>
      </div>
      <!-- 其他手風琴 -->
    </div>
  </div>
  <div class="content">
    <!-- 右側內容插槽 -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      accordionState: {
        collapseOne: false,
        collapseTwo: false,
      } as { [key: string]: boolean },
      accordionContent: {
        collapseOne: "Content for collapseOne",
        collapseTwo: "Content for collapseTwo",
      },
    };
  },
  methods: {
    toggleAccordion(accordionId: string) {
      if (accordionId in this.accordionState) {
        this.accordionState[accordionId] = !this.accordionState[accordionId];
      } else {
        // 如果accordionId不在accordionState對象中，這裡可能需要處理錯誤情況
        console.error("Invalid accordionId:", accordionId);
      }
    },
  },
};
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
  background-color: #ffffff;
  color: #333;
  cursor: pointer;
  text-align: center; /* 文字居中 */
  text-decoration: none; /* 移除下方底線 */
}

.router-button:hover {
  background-color: #2b2b2f; /* 滑鼠移動過去的背景色 */
  color: #fff;
}

.accordion-button.collapsed {
  background-color: rgb(255, 255, 255); /* 按鈕關閉時的背景色 */
  color: #333; /* 按鈕關閉時的文字色 */
}

.accordion-button:not(.collapsed) {
  background-color: rgb(255, 255, 255); /* 按鈕打開時的背景色 */
  color: rgb(90, 89, 89); /* 按鈕打開時的文字色 */
}
</style>
