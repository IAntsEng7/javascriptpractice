<template>
  <div class="card">
    <div>
      切換語言：
      <select @change="handleChangeLanguage">
        <option value="zh-TW" selected>中文</option>
        <option value="en-US">English</option>
      </select>
    </div>
    <p>
      {{ $t("edit") }} <code>components/HelloWorld.vue</code>
      {{ $t("test_i18n_func") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const handleChangeLanguage = (e: Event) => {
  locale.value = (e.target as HTMLSelectElement).value;
};
</script>
