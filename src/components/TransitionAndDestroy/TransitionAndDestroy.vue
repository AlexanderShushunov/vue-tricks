<template>
  <div class="transition-and-destroy">
    <div class="case">
      <h1>In transition-group</h1>
      <button @click='openTransitionGroup = !openTransitionGroup'>
        {{ openTransitionGroup ? 'Close' : 'Open' }}
      </button>
      <transition-group name='list' tag='div'>
        <Item
            class='item'
            v-for='(item, key) in showedList'
            :key='item + "-" + key'
            ref='items'
            data="In transition-group"
        >
          {{ item }}
        </Item>
      </transition-group>
    </div>

    <div class="case">
      <h1>Simple item</h1>
      <button @click='openSimpleItem = !openSimpleItem'>
        {{ openSimpleItem ? 'Close' : 'Open' }}
      </button>
      <Item
          v-if="openSimpleItem"
          data="Not in transition"
      >
        Simple item
      </Item>
    </div>

    <div class="case">
      <h1>With transition style</h1>
      <button @click='openWithTransitionStyle = !openWithTransitionStyle'>
        {{ openWithTransitionStyle ? 'Close' : 'Open' }}
      </button>
      <Item
          class="with-transition"
          v-if="openWithTransitionStyle"
          data="With transition style"
      >
        With transition style
      </Item>
    </div>
  </div>
</template>

<script>
  import Item from './Item';

  export default {
    name: 'TransitionAndDestroy',
    data() {
      return {
        openTransitionGroup: false,
        openSimpleItem: false,
        openWithTransitionStyle: false,
        counter: 0,
        list: [1, 2]
      };
    },
    computed: {
      showedList() {
        return this.openTransitionGroup
            ? this.list
            : this.list.slice(0, 1);
      }
    },
    components: {
      Item
    }
  };
</script>

<style>
  .transition-and-destroy {
    display: flex;
  }

  .case {
    width: 300px;
  }

  .list-leave-active {
    transform: translateX(20px);
    transition: all 2s;
  }

  .with-transition {
    transform: translateX(20px);
    transition: all 2s;
  }
</style>
