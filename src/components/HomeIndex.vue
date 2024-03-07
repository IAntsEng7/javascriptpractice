<template>
  <div>
    <a>Home Index screen</a>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
init();
function init() {
  console.log("Home Index component mounted");
}
</script>
