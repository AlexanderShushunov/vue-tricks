<template>
  <div>
    <ComputedAndUpdatesChild />
    <ChangeComputedUpdateItself />
    <ComputedAndUpdatesChangeComputedDirectly />
  </div>
</template>

<script>

  import ComputedAndUpdatesChild from './ComputedAndUpdatesChild';
  import ChangeComputedUpdateItself from './ChangeComputedUpdateItself';
  import ComputedAndUpdatesChangeComputedDirectly from './ComputedAndUpdatesChangeComputedDirectly';

  export default {
    name: 'app',
    components: {
      ComputedAndUpdatesChild,
      ChangeComputedUpdateItself,
      ComputedAndUpdatesChangeComputedDirectly
    }
  };
</script>
