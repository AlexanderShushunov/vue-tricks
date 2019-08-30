<template>
  <div>
    <hr />
    <h1>Computed And Updates. Change Computed Directly</h1>
    <div><b>a</b> =</div>
    <Label :data="a" />

    <div> Label <b> doubleA</b> =</div>
    <Label :data="doubleA" />

    <div>doubleA {{doubleA}}</div>

    <button @click="inc">inc</button>
    <button @click="incDouble">inc double</button>
  </div>
</template>

<script>
  import Label from '../Label';

  export default {
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
        return {
          value: this.a.value * 2
        };
      }
    },
    methods: {
      inc() {
        this.a.value++;
      },
      incDouble() {
        this.doubleA.value++;
        console.log('this.doubleA =', this.doubleA);
      }
    },
    updated() {
      console.log('a is an observer');
      console.log(this.a);
      console.log('doubleA is not an observer');
      console.log(this.doubleA);
    },
    name: 'ComputedAndUpdatesChangeComputedDirectly'
  };
</script>

<style scoped>

</style>
