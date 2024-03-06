<template>
  <div class="app">
    <sidebar-component>
      <!-- 將右側內容放到插槽內 -->
      <div>
        <!-- 放置需要渲染在右側的內容 -->
        <router-view />
      </div>
    </sidebar-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default defineComponent({
  components: { SidebarComponent },
});
</script>

<style>
.app {
  display: flex;
}
</style>
