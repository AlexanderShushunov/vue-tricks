<template>
  <div class="component-vs-class">
    <h1>Full repaint</h1>
    <RunnerSet full-repaint />
    <h1>Smart update repaint</h1>
    <RunnerSet />
  </div>
</template>

<script>
  import RunnerSet from './RunnerSet';

  export default {
    name: 'ComponentVsClass',
    components: {
      RunnerSet
    }
  };
</script>

<style scoped>
</style>
