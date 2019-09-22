<template>
  <div class="independent-child-runner-set">
    <div class="case">
      <h2>Div with text</h2>
      <TestRunner v-slot="{ color }">
        <div>simple text {{ color }}</div>
      </TestRunner>
    </div>
    <div class="case">
      <h2>Html buttons</h2>
      <TestRunner v-slot="{ color }">
        <IndependentHtmlButtons :color="color" />
      </TestRunner>
    </div>
    <div class="case">
      <h2>Component Buttons</h2>
      <TestRunner v-slot="{ color }">
        <IndependentComponentButtons :color="color" />
      </TestRunner>
    </div>
  </div>
</template>

<script>
  import TestRunner from './TestRunner';
  import IndependentHtmlButtons from './IndependentHtmlButtons';
  import IndependentComponentButtons from './IndependentComponentButtons';

  export default {
    name: 'IndependentChildRunnerSet',
    props: {
      fullRepaint: Boolean
    },
    components: {
      TestRunner,
      IndependentHtmlButtons,
      IndependentComponentButtons
    }
  };
</script>

<style scoped>
  .independent-child-runner-set {
    display: flex;
    flex-direction: row;
  }

  .case {
    width: 400px;
  }
</style>
