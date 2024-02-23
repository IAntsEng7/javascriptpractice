<template>
  <div class="container">
    <header>
      <div>Header</div>
    </header>

    <main>
      <div>Main</div>

      <div><font-awesome-icon icon="coffee" /></div>
      <div>
        <button class="btn btn-primary">Primary Button</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
