<template>
  <div class="runner-set">
    <div class="case">
      <h2>Div with text</h2>
      <TestRunner
          :fullRepaint="fullRepaint"
          v-slot="{ propeller }"
      >
        <div>simple text {{ propeller }}</div>
      </TestRunner>
    </div>
    <div class="case">
      <h2>Html buttons</h2>
      <TestRunner
          :fullRepaint="fullRepaint"
          v-slot="{ propeller }"
      >
        <HtmlButtons :propeller="propeller" />
      </TestRunner>
    </div>
    <div class="case">
      <h2>Component Buttons</h2>
      <TestRunner
          :fullRepaint="fullRepaint"
          v-slot="{ propeller }"
      >
        <ComponentButtons :propeller="propeller" />
      </TestRunner>
    </div>
    <div class="case">
      <h2>Functional Buttons</h2>
      <TestRunner
          :fullRepaint="fullRepaint"
          v-slot="{ propeller }"
      >
        <FunctionalComponentButtons :propeller="propeller" />
      </TestRunner>
    </div>
  </div>
</template>

<script>
  import HtmlButtons from './HtmlButtons';
  import TestRunner from './TestRunner';
  import ComponentButtons from './ComponentButtons';
  import FunctionalComponentButtons from './FunctionalComponentButtons';

  export default {
    name: 'RunnerSet',
    props: {
      fullRepaint: Boolean
    },
    components: {
      HtmlButtons,
      TestRunner,
      ComponentButtons,
      FunctionalComponentButtons
    }
  };
</script>

<style scoped>
  .runner-set {
    display: flex;
    flex-direction: row;
  }

  .case {
    width: 400px;
  }
</style>
