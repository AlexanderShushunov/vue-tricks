<template>
  <div>
    <h2>Getters With Cache</h2>
    State prop counter: {{ counter }}<br/>

    <label>Selected index: <input v-model="index" type="number"></label><br/>
    Selected value (functional getter):<br />
    <Label :data="getByIndexCached(index)" />
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  import Label from '../Label';

  export default {
    name: 'GettersInTemplates',
    data() {
      return {
        index: 4
      };
    },
    computed: {
      ...mapState('functionGetter', ['counter']),
      ...mapGetters('functionGetter', ['getByIndexCached'])
    },
    components: {
      Label
    }
  };
</script>

<style scoped>

</style>
