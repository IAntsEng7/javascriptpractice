<template>
  <div class="sidebar">
    <!-- 左側選單 -->
    <router-link to="/" class="router-button">Home Index</router-link>
    <router-link to="/learn/Java" class="router-button">Java Test</router-link>
    <div id="accordionExample" class="accordion">
      <div class="accordion-item">
        <h2 id="headingOne" class="accordion-header">
          <button
            class="accordion-button"
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
            {{ accordionContent["collapseOne"] }}1111111111
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingTwo" class="accordion-header">
          <button
            class="accordion-button"
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
            {{ accordionContent["collapseTwo"] }} 22222222222
          </div>
        </div>
      </div>
      <!-- 其他折叠项类似上面的结构 -->
    </div>
  </div>
  <div class="content">
    <!-- 右側內容插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionState: {
        collapseOne: true,
      },
      accordionContent: {
        collapseOne: "Content for collapseOne",
        collapseTwo: "Content for collapseTwo",
      },
    };
  },
  methods: {
    toggleAccordion(accordionId) {
      this.accordionState[accordionId] = !this.accordionState[accordionId];
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

.accordion-body {
  display: block;
}

.accordion-collapse {
  height: auto;
}
</style>
