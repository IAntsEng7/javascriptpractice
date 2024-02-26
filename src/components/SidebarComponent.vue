<template>
  <div class="sidebar">
    <!-- 左側選單按鈕 -->
    <router-link to="/" class="router-button">Home Index</router-link>
    <router-link to="/caerusIntro" class="router-button"
      >Caerus Intro</router-link
    >
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
