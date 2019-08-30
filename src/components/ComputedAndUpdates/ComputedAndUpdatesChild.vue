<template>
  <div>
    <hr />
    <h1>Computed And Updates Child</h1>
    <div><b>a</b> =</div>
    <Label :data="a" />
    <div>We do not change link to <b>doubleA</b>. So label below is not updated</div>
    <Label :data="doubleA" />
    <div>Link to <b>quadroA</b> is changed after each <b>a</b> update</div>
    <Label :data="quadroA" />
    <button @click="inc">inc a</button>
  </div>
</template>

<script>
  import Label from '../Label';

  let cashedDoubleA;
  let tmp;

  export default {
    name: 'ComputedAndUpdatesChild',
    components: {
      Label
    },
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
      },
      quadroA() {
        return {
          value: this.doubleA.value * 2
        };
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
    }
  };
</script>

<style scoped>

</style>
