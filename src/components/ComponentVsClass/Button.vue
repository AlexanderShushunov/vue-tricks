<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'Button'
  };
</script>

<style scoped>
  .button {
    color: red;
    width: 50px;
  }
</style>
