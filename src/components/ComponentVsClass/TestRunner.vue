<template>
  <div>
    <button @click="run">
      Run
    </button>
    <br />
    count: {{ count }}
    <br />
    totalTime: {{ totalTime }}
    <div :key="fullRepaint ? count : 'key'">
      <slot
          v-bind:propeller="propeller"
          v-bind:color="color"
      />
    </div>
  </div>
</template>

<script>
  const propellerPositions = ['|', '/', '-', '\\'];
  export default {
    name: 'TestRunner',
    props: {
      turns: {
        type: Number,
        default: 1000
      },
      fullRepaint: Boolean
    },
    data() {
      return {
        count: 0,
        totalTime: 0
      };
    },
    computed: {
      propeller() {
        return propellerPositions[this.count % propellerPositions.length];
      },
      color () {
        return `rgb(${this.count % 256}, ${(this.count + 86) % 256}, ${(this.count + 171) % 256})`
      }
    },
    beforeCreate() {
      this.nonReactiveData = {
        totalTime: 0,
        startUpdateTime: 0
      };
    },
    beforeUpdate() {
      this.nonReactiveData.startUpdateTime = window.performance.now();
    },
    updated() {
      this.nonReactiveData.totalTime += window.performance.now() - this.nonReactiveData.startUpdateTime;
    },
    methods: {
      run() {
        this.nonReactiveData.totalTime = 0;
        this.count = 0;
        const intervalId = setInterval(() => {
          this.count++;
          if (this.count > this.turns) {
            this.totalTime = this.nonReactiveData.totalTime;
            clearInterval(intervalId);
          }
        }, 10);
      }
    }
  };
</script>
