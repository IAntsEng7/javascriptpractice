<template>
  <div class="sidebar">
    <!-- 左側選單 -->
    <router-link to="/" class="router-button">Home</router-link>
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
            @click="handleAccordionClick(itemId)"
          >
            {{ itemId }}
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
              <router-link class="router-button" :to="link.link">{{
                link.content
              }}</router-link>
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
import { useRouter } from "vue-router";

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
  FrontEnd: {
    id: "FrontEnd",
    links: [
      { content: "JavaScript", link: "/frontend/javascript" },
      { content: "TypeScript", link: "/frontend/typescript" },
      { content: "Vue 3", link: "/frontend/vue3" },
    ],
  },
  BackEnd: {
    id: "BackEnd",
    links: [
      { content: "Java", link: "/backend/java" },
      { content: "Python", link: "/backend/python" },
      { content: "Rust", link: "/backend/rust" },
    ],
  },
  DataBase: {
    id: "DataBase",
    links: [
      { content: "DBMS", link: "/database/dbms" },
      { content: "NoSQL", link: "/database/nosql" },
      { content: "NewSQL", link: "/database/newsql" },
    ],
  },
};

export default defineComponent({
  setup() {
    const router = useRouter();

    const state = reactive<{
      accordionState: AccordionState;
    }>({
      accordionState: {
        FrontEnd: false,
        BackEnd: false,
        DataBase: false,
      },
    });

    const toggleAccordion = (accordionId: string) => {
      if (accordionId in state.accordionState) {
        state.accordionState[accordionId] = !state.accordionState[accordionId];
        if (state.accordionState[accordionId]) {
          router.push(accordionContent[accordionId].id);
        }
      } else {
        console.error("Invalid accordionId:", accordionId);
      }
    };

    const closeAccordions = (currentId: string) => {
      for (const id in state.accordionState) {
        if (id !== currentId) {
          state.accordionState[id] = false;
        }
      }
    };

    const handleAccordionClick = (itemId: string) => {
      toggleAccordion(itemId);
      closeAccordions(itemId);
    };

    return {
      accordionContent,
      state,
      handleAccordionClick,
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
  background-color: rgb(120, 120, 120); /* 滑鼠移動過去的背景色 */
  color: #fff;
}

.accordion-button.collapsed {
  background-color: rgb(255, 255, 255); /* 按鈕關閉時的背景色 */
  color: #333; /* 按鈕關閉時的文字色 */
}

.accordion-button:not(.collapsed) {
  background-color: rgb(90, 90, 90); /* 按鈕打開時的背景色 */
  color: rgb(255, 255, 255); /* 按鈕打開時的文字色 */
}
</style>
