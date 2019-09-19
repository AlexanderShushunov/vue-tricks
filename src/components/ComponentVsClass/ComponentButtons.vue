<template>
  <div>
    <Button
        v-for="(count) in 100"
        :key="count"
    >
      {{ count }} {{ propeller }}
    </Button>
  </div>
</template>

<script>
  import Button from './Button';

  export default {
    name: 'ComponentButtons',
    props: {
      propeller: {
        type: String,
        default: '-'
      }
    },
    components: {
      Button
    }
  };
</script>
