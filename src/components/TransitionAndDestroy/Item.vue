<template>
  <div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: ['data'],
    beforeDestroy() {

      const waiter = () => {
        this.$el.removeEventListener('transitionend', waiter);
        this.completeDestroyed();
      };

      const transitionDuration = parseFloat(getComputedStyle(this.$el).transitionDuration);
      this.log(`before destroy (transitionDuration = ${transitionDuration})`);
      console.log(this)
      if (transitionDuration > 0) {
        this.$el.addEventListener('transitionend', waiter);
      } else {
        this.completeDestroyed();
      }
    },
    destroyed() {
      this.log('destroyed');
    },
    methods: {
      completeDestroyed() {
        this.log('completeDestroyed');
      },
      log (event) {
        console.log(event, new Date().getTime(), this.data);
      }
    }
  };
</script>

<style scoped>

</style>
