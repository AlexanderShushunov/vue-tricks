<template>
  <div>
    <h2>Getters Memoized by Memoize One</h2>
    State prop counter: {{ counter }}<br/>

    <label>Selected index: <input v-model="index" type="number"></label><br/>
    Selected value (functional getter):<br />
    <Label :data="getByIndexMem(index)" />
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  import Label from '../Label';

  export default {
    name: 'GettersInTemplates',
    data() {
      return {
        index: 0
      };
    },
    computed: {
      ...mapState('functionGetter', ['counter']),
      ...mapGetters('functionGetter', ['getByIndexMem'])
    },
    components: {
      Label
    }
  };
</script>

<style scoped>

</style>
