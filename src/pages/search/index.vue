<template>
  <view>
    搜索页
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'Mine',
  setup() {
    const state = reactive({
      name: '李雷雷',
      phone: '15239129378',
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.mine-container {
  height: 100%;
  &-main{
    height: 100px;
    background: #296dd3;
    margin-bottom: 100px;
    position: relative;
    &-card{
      position: absolute;
      background:#fff;
      width: 80%;
      left: 10%;
      height: 100px;
      top: 50px;
      border-radius: 8px;
      text-align: center;
      .avatar{
        display: inline-block;
        margin-top: -30px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background: #fff;
        border: 3px solid #eeeeee;
      }
    }
  }
}
</style>
