<template>
  <div class="label">
    {{ data.value }}
  </div>
</template>

<script>
  export default {
    name: 'Label',
    props: {
      data: {
        type: Object,
        default: () => ({
          value: ''
        })
      }
    },
    updated() {
      this.$el.classList.add('flash');
      setTimeout(
          () => this.$el.classList.remove('flash'),
          500
      );
    }
  };
</script>

<style scoped>
  .label {
    transition: all .3s ease;
  }

  .flash {
    background-color: red;
  }
</style>
