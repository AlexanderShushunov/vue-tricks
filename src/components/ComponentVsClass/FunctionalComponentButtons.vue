<template>
  <div>
    <FunctionalButton
        v-for="(count) in 100"
        :key="count"
    >
      {{ count }} {{ propeller }}
    </FunctionalButton>
  </div>
</template>

<script>
  import FunctionalButton from './FunctionalButton';

  export default {
    name: 'FunctionalComponentButtons',

    props: {
      propeller: {
        type: String,
        default: '-'
      }
    },
    components: {
      FunctionalButton
    }
  };
</script>
