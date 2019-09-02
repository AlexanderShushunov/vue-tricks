<template>
  <div>
    <hr/>
    <h1>Use Functional Getters</h1>
    State prop list: {{ list }}
    <button @click="addToList(Math.floor(Math.random() * 100))">add to list</button><br/>

    Sate prop counter: {{ counter }}
    <button @click="incCounter()">inc counter</button> (click and see updates)
    <InTemplates />
    <InTemplatesNotUseCounter />
    <InComputed />
    <GettersWithCache />
    <GettersWithMem />
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
  import InTemplates from './InTemplates';
  import InComputed from './InComputed';
  import GettersWithCache from './GettersWithCache';
  import InTemplatesNotUseCounter from './InTemplatesNotUseCounter';
  import GettersWithMem from './GettersWithMem';

  export default {
    name: 'Getters',
    components: {
      InTemplates,
      InComputed,
      GettersWithCache,
      InTemplatesNotUseCounter,
      GettersWithMem
    },
    computed: {
      ...mapState('functionGetter', ['list', 'counter'])
    },
    methods: {
      ...mapMutations('functionGetter', ['addToList', 'incCounter'])
    }
  };
</script>

<style scoped>

</style>
