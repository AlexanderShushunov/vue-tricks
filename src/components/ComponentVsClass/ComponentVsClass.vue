<template>
  <div class="component-vs-class">
    <h1>Full repaint</h1>
    <RunnerSet full-repaint />
    <h1>Smart update repaint</h1>
    <RunnerSet />
    <h1>Buttons do not depend on props (child component splitting)</h1>
    <IndependentChildRunnerSet />
  </div>
</template>

<script>
  import RunnerSet from './RunnerSet';
  import IndependentChildRunnerSet from './IndependentChildRunnerSet';

  export default {
    name: 'ComponentVsClass',
    components: {
      RunnerSet,
      IndependentChildRunnerSet
    }
  };
</script>

<style scoped>
</style>
