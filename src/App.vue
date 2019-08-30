<template>
  <div id="app">
    <AddToData />
    <ComputedAndUpdatesChild />
    <ChangeComputedUpdateItself />
    <ComputedAndUpdatesChangeComputedDirectly />
  </div>
</template>

<script>
  import AddToData from './components/AddToData';
  import {
    ChangeComputedUpdateItself,
    ComputedAndUpdatesChild,
    ComputedAndUpdatesChangeComputedDirectly
  } from './components/ComputedAndUpdates';

  export default {
    name: 'app',
    components: {
      AddToData,
      ComputedAndUpdatesChild,
      ChangeComputedUpdateItself,
      ComputedAndUpdatesChangeComputedDirectly
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
