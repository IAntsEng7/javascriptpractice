<template>
  <div>
    <a>Home Index screen</a>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    console.log("Home Index component mounted");
  },
};
</script>
