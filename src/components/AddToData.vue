<template>
  <div>
    <hr />
    <h1>Add to data???</h1>
    {{ user.lastName }}<br />
    <button @click="handleClick">lastName = ...</button>
    <button @click="handleClickSet">$set</button>
    <button @click="handleClickUser">user =</button>
    <br />
    Do not touch 'lastName = ...'. After that $set does not work.
  </div>
</template>

<script>
  let a = 1;

  export default {
    data() {
      return {
        user: {
          name: 'Alex'
        }
      };
    },
    methods: {
      handleClick() {
        this.user.lastName = 'Shu' + a++;
      },
      handleClickSet() {
        this.$set(this.user, 'lastName', 'Shu' + a++);
      },
      handleClickUser() {
        this.user = {
          ...this.user,
          lastName: 'Shu' + a++
        };
      }
    }
  };
</script>
