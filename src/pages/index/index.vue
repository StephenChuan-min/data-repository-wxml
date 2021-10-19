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
          <view class="suffix suffix-search">搜索</view>
        </view>
        <view class="tab-block">
          <view class="tab-content">
            <view v-for="item in state.tabs" :key="item.key" :class="['tabpane-item', state.params.role === item.key ? 'is-active' : '']" @click="tabClick(item.key)">{{item.label}}</view>
          </view>
          <view class=""></view>
        </view>
      </view>
      <view class="block ">
        <view class="">
          <view class="name"></view>
          <view class="">
            <view class="id"></view>
            <view class="account"></view>
          </view>
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
      tabs: [
        { label: '正式', key: 1 },
        { label: '试用', key: 0 },
      ],
      params: {
        username: '',
        role: 1,
      },
    });

    const tabClick = (key) => {
      state.params.role = key;
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
    });
    return { state, tabClick, };
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
      box-shadow: 0px 10px 20px 0px rgba(13, 32, 78, 0.06);
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
          width: 70px;
          height: 30px;
          position: absolute;
          right: 5px;
          bottom: 5px;
          border-radius: 20px;
          text-align: center;
          line-height: 30px;
          z-index: 9;
          font-size: 15px;
          &-search{
            background-color: #E2EDFF;
            color: #397AE7;
          }
          &-cancel{
            background-color: #EFF2F7;
            color: #4E5566;
          }
        }
      }
      .tab-block{
        display: flex;
        //margin-bottom: 13px;
        .tab-content{
          display: flex;
          .tabpane-item{
            font-size: 16px;
            color: #4E5566;
            margin-right: 40px;
            &.is-active{
              font-size: 20px;
              font-weight: bold;
              color: #20242E;
              &::after{
                content:'';
                display: block;
                width: 40px;
                height: 5px;
                background: linear-gradient(90deg, #27CAFF 0%, #2F7AF9 100%);
                margin-top: -5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
