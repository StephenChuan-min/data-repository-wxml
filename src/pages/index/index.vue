<template>
  <view class="index">
   <nut-button type="primary" >{{msg}}</nut-button>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  name: 'Index',
  components: {},
  setup() {
    const state = reactive({
      msg: '结构化账号',
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
