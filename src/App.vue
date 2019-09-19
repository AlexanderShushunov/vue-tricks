<template>
  <div id="app">
    <div class="menu">
      <router-link to="/ComputedAndUpdates">ComputedAndUpdates</router-link>
      <router-link to="/AddToData">AddToData</router-link>
      <router-link to="/UseFunctionalGetters">UseFunctionalGetters</router-link>
      <router-link to="/TransitionAndDestroy">TransitionAndDestroy</router-link>
      <router-link to="/ComponentVsClass">ComponentVsClass</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
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
  .menu {
    display: flex;
    justify-content: space-around;
  }
</style>
