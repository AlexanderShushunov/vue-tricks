<template>
  <div>
    <hr />
    <h1>Change Computed and Update Itself</h1>
    <div>
      We do not change link to <b>doubleA</b>.
      But this component tracks <b>doubleA</b>
      (template depends only of doubleA)
    </div>
    <div>doubleA = {{doubleA}}</div>
    <button @click="inc">inc</button>
  </div>
</template>

<script>
  let cashedDoubleA;
  let tmp;

  export default {
    data() {
      return {
        a: {
          value: 42
        }
      };
    },
    computed: {
      doubleA() {
        if (!cashedDoubleA) {
          cashedDoubleA = {};
        }
        cashedDoubleA.value = this.a.value * 2;
        return cashedDoubleA;
      }
    },
    methods: {
      inc() {
        this.a.value++;
      }
    },
    updated() {
      console.log('link to doubleA not changed -', this.doubleA === tmp);
      tmp = this.doubleA;
    },
    name: 'ChangeComputedUpdateItself'
  };
</script>

<style scoped>

</style>
