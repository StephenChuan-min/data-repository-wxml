<template>
  <view class="index-wrapper">
    <view class="navigationBar">
      <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
    </view>
    <view class="index-wrapper-content">
      <view class="block search-block">
        <view class="search-input">
          <text class="iconfont icon-xiaochengxu-sousuo"></text>
          <input placeholder="请输入账号或姓名"/>
          <view class="suffix">搜索</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { onMounted, reactive } from 'vue';
import Taro from "@tarojs/taro";

export default {
  name: 'Index',
  setup() {
    const state = reactive({
      style: {
        marginTop: '',
        lineHeight: '',
      },
    });

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
    });
    return { state };
  },
};
</script>

<style lang="scss">
.index-wrapper{
  height: 100vh;
  background-color: #F6F7F9;
  .navigationBar{
    height: 124px;
    overflow: hidden;
    background: no-repeat url('../../assets/img/page-bg.png');
    background-size: cover;
    &-title{
      font-size: 17px;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
    }
  }
  &-content{
    .block{
      background-color: #fff;
      padding: 0 15px;
    }
    .search-block{
      height: 75px;
      .search-input{
        transform: translateY(-26px);
        position: relative;
        z-index: 9;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0px 2px 10px 0px rgba(26, 64, 156, 0.12);
        input{
          height: 40px;
          box-sizing: border-box;
          padding-left: 45px;
          border: none;
        }
        .input-placeholder{
          font-size: 15px;
          color: #B2B8C9;
        }
        .iconfont{
          position: absolute;
          left: 17px;
          color: #7D8699;
          font-size: 17px;
          line-height: 42px;
        }
        .suffix{
          position: absolute;
          right: 0;
          bottom: 10px;
          border: 1px solid #C5C7CE;
          border-radius: 21px;
          z-index: 9;
        }
      }
    }
  }
}
</style>
