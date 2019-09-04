<template>
  <div>
    <hr />
    <h1>Functional Computed</h1>

    <div><b>doubleA</b>:</div>
    <Label :data="doubleA" />

    <div>
      <b>funDoubleA</b> is a function. New value of funDoubleA is not calculated (see console).
      But the component is updating, so funDoubleA is invoked.
      It invoke in vm context (this -> vm) so it returns the right value.
    </div>
    <Label :data="funDoubleA()" />

    <!-- error -->
    <!-- <Label :data="deepFunDoubleA()()" /> -->

    <div><b>memDoubleA</b> is a function. But it is surrounded by memoizeOne:</div>
    <Label :data="memDoubleA()" />

    <div>
      <b>fixMemDoubleA</b> is a memoized function too. But we get <b>a</b> in 'main' body of getter.
      Vue calcs new value of <b>fixMemDoubleA</b> if <b>a</b> changes
    </div>
    <Label :data="fixMemDoubleA()" />

    <button @click="inc">inc a</button>
  </div>
</template>

<script>
  import Label from '../Label';

  function memoizeOne(inFn) {
    let lastResult;
    let calledOnce = false;

    return () => {
      if (calledOnce) {
        return lastResult;
      }
      lastResult = inFn();
      calledOnce = true;
      return lastResult;
    };
  }


  export default {
    name: 'FunctionalComputed',
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
        console.log('calc new doubleA');
        return {
          value: this.a.value * 2
        };
      },
      funDoubleA() {
        console.log('calc new funDoubleA');
        return function () {
          return {
            value: this.a.value * 2
          };
        };
      },
      deepFunDoubleA() {
        console.log('calc new funDoubleA');
        return function () {
          return function () {
            return {
              // if template calls deepFunDoubleA()() error is thrown
              // because this is 'missing'
              value: this.a.value * 2
            };
          };
        };
      },
      memDoubleA() {
        console.log('calc new memDoubleA');
        return memoizeOne(
            () => ({
              value: this.a.value * 2
            })
        );
      },
      fixMemDoubleA() {
        console.log('calc new fixMemDoubleA');
        const value = this.a.value;
        return memoizeOne(
            () => ({
              value: value * 2
            })
        );
      }
    }
    ,
    methods: {
      inc() {
        this.a.value++;
      }
    },
    mounted() {
      window._FunctionalComputed = this;
    }
  };
</script>

<style scoped>

</style>
