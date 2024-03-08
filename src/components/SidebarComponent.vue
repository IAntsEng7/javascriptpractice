<template>
  <div class="sidebar">
    <!-- 左側選單 -->
    <router-link to="/" class="router-button">Home Index</router-link>
    <router-link to="/learn" class="router-button">Learn Layout</router-link>
    <div id="accordionExample" class="accordion">
      <div
        v-for="[itemId, item] in Object.entries(accordionContent)"
        :key="itemId"
        class="accordion-item"
      >
        <h2 :id="`heading${itemId}`" class="accordion-header">
          <button
            :class="{
              'accordion-button': true,
              collapsed: !state.accordionState[itemId],
            }"
            type="button"
            :data-bs-target="`#${itemId}`"
            :aria-expanded="state.accordionState[itemId]"
            @click="toggleAccordion(itemId)"
          >
            Item #{{ itemId }}
          </button>
        </h2>
        <div
          :id="itemId"
          class="accordion-collapse collapse"
          :class="{ show: state.accordionState[itemId] }"
          :aria-labelledby="`heading${itemId}`"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div v-for="(link, index) in item.links" :key="index">
              <router-link :to="link.link">{{ link.content }}</router-link>
            </div>
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

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface AccordionLink {
  content: string;
  link: string;
}

interface AccordionItem<T extends string> {
  id: T;
  links: AccordionLink[];
}

interface AccordionState {
  [key: string]: boolean;
}

const accordionContent: Record<string, AccordionItem<string>> = {
  collapseOne: {
    id: "collapseOne",
    links: [
      { content: "Link 1", link: "/link1" },
      { content: "Link 2", link: "/link2" },
      { content: "Link 3", link: "/link3" },
    ],
  },
  collapseTwo: {
    id: "collapseTwo",
    links: [
      { content: "Link A", link: "/linkA" },
      { content: "Link B", link: "/linkB" },
    ],
  },
};

export default defineComponent({
  setup() {
    const state = reactive<{
      accordionState: AccordionState;
    }>({
      accordionState: {
        collapseOne: false,
        collapseTwo: false,
      },
    });

    const toggleAccordion = (accordionId: string) => {
      if (accordionId in state.accordionState) {
        state.accordionState[accordionId] = !state.accordionState[accordionId];
      } else {
        console.error("Invalid accordionId:", accordionId);
      }
    };

    return {
      accordionContent,
      state,
      toggleAccordion,
    };
  },
});
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
