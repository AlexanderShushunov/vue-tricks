<template>
  <div>
    <h2>In Templates</h2>

    State prop counter: {{ counter }}<br/>

    <label>Selected index: <input v-model="index" type="number"></label><br/>
    Selected value (functional getter):<br />
    <Label :data="getByIndex(index)" />
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  import Label from '../Label';

  export default {
    name: 'InTemplates',
    data() {
      return {
        index: 1
      };
    },
    computed: {
      ...mapState('functionGetter', ['counter']),
      ...mapGetters('functionGetter', ['getByIndex'])
    },
    components: {
      Label
    }
  };
</script>

<style scoped>

</style>
