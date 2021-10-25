<template>
  <view />
</template>

<script>
import { onMounted } from 'vue';
import Taro from "@tarojs/taro";
import { storage } from "../../utils";

export default {
  name: 'Default',
  setup() {
    onMounted(() => {
      const session = storage.getItem('session');
      if (session) {
        Taro.switchTab({
          url: '/pages/index/index',
        });
      } else {
        Taro.reLaunch({
          url: '/pages/login/index',
        });
      }
    });
  },
};
</script>
