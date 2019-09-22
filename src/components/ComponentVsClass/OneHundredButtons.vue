<template>
  <div>
    <Button
        v-for="(count) in 100"
        :key="count"
    >
      {{ count }}
    </Button>
  </div>
</template>

<script>
  import Button from './Button';

  export default {
    name: 'OneHundredButtons',
    components: {
      Button
    }
  };
</script>

