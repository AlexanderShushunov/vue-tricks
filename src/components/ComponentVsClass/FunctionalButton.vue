<template functional>
  <button class="button">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'FunctionalButton'
  };
</script>

<style scoped>
  .button {
    color: red;
    width: 50px;
  }
</style>
