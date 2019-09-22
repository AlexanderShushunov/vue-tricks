<template>
  <div
      :style="{
        'background-color': color
      }"
      class="container"
  >
    <div>
      <button
          v-for="(count) in 100"
          class="button"
          :key="count"
      >
        {{ count }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HtmlButtons',
    props: {
      color: {
        type: String,
        default: 'rgb(255, 255, 255)'
      }
    }
  };
</script>

<style scoped>
  .container {
    padding: 5px;
  }
  .button {
    color: red;
    width: 50px;
  }
</style>
