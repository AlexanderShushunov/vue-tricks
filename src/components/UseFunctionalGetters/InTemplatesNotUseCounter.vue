<template>
  <div>
    <h2>In Templates 2</h2>
    <h3>Is not updated because template dose not depend on counter</h3>

    <label>Selected index: <input v-model="index" type="number"></label><br />
    Selected value (functional getter):<br />
    <Label :data="getByIndex(index)" />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Label from '../Label';

  export default {
    name: 'InTemplatesNotUseCounter',
    data() {
      return {
        index: 2
      };
    },
    computed: {
      ...mapGetters('functionGetter', ['getByIndex'])
    },
    components: {
      Label
    }
  };
</script>

<style scoped>

</style>
