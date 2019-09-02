<template>
  <div>
    <h2>In Computed</h2>

    Sate prop counter: {{ counter }}<br/>

    <label>Selected index: <input v-model="index" type="number"></label><br/>
    Selected value (functional getter):<br/>
    <Label :data="selectedValue" />
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  import Label from '../Label';

  export default {
    name: 'InComputed',
    data() {
      return {
        index: 3
      };
    },
    computed: {
      ...mapState('functionGetter', ['counter']),
      ...mapGetters('functionGetter', ['getByIndex']),
      selectedValue() {
        return this.getByIndex(this.index)
      }
    },
     components: {
      Label
    }
  };
</script>

<style scoped>

</style>
