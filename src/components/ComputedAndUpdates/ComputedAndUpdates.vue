<template>
  <div>
    <ComputedAndUpdatesChild />
    <ChangeComputedUpdateItself />
    <ComputedAndUpdatesChangeComputedDirectly />
    <FunctionalComputed />
  </div>
</template>

<script>

  import ComputedAndUpdatesChild from './ComputedAndUpdatesChild';
  import ChangeComputedUpdateItself from './ChangeComputedUpdateItself';
  import ComputedAndUpdatesChangeComputedDirectly from './ComputedAndUpdatesChangeComputedDirectly';
  import FunctionalComputed from './FunctionalComputed';

  export default {
    name: 'app',
    components: {
      ComputedAndUpdatesChild,
      ChangeComputedUpdateItself,
      ComputedAndUpdatesChangeComputedDirectly,
      FunctionalComputed
    }
  };
</script>
