<template>
  <div
      :style="{
        'background-color': color
      }"
      class="container"
  >
    <OneHundredButtons />
  </div>
</template>

<script>
  import OneHundredButtons from './OneHundredButtons';

  export default {
    name: 'IndependentComponentButtons',
    props: {
      color: {
        type: String,
        default: 'rgb(255, 255, 255)'
      }
    },
    components: {
      OneHundredButtons
    },
  };
</script>

<style scoped>
  .container {
    padding: 5px;
  }
</style>
