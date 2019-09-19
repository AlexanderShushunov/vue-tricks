<template>
  <div>
    <button
        v-for="(count) in 100"
        class="button"
        :key="count"
    >
      {{ count }} {{ propeller }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'HtmlButtons',
    props: {
      propeller: {
        type: String,
        default: '-'
      }
    }
  };
</script>

<style scoped>
  .button {
    color: red;
    width: 50px;
  }
</style>
