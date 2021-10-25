<template>
  <view class="index-wrapper">
    <view class="index-wrapper-modal" v-if="state.modalVisible">
      <view class="modal-content">
        <view class="body">确认退出登录？</view>
        <view class="footer">
          <view class="cancel" @click="state.modalVisible = false">取消</view>
          <view class="confirm" @click="doLogout">确定</view>
        </view>
      </view>
    </view>
    <view class="navigationBar">
      <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
    </view>
    <view class="info-card">
      <view class="avatar"><image src="../../assets/img/head.png"></image></view>
      <view class="name">{{state.userInfo.name}}</view>
      <view class="username">{{state.userInfo.username}}</view>
    </view>
    <view @click="state.modalVisible = true" class="logout-button">退出登录</view>
  </view>
</template>

<script>
import { onMounted, reactive } from 'vue';
import Taro from "@tarojs/taro";
import { storage } from "../../utils";
import { logout } from '../../server/api/logout';

export default {
  name: 'Mine',
  setup() {
    const state = reactive({
      userInfo: {},
      modalVisible: false,
      style: {
        marginTop: '',
        lineHeight: '',
      },
    });

    const doLogout = () => {
      storage.removeItem('session');
      Taro.reLaunch({
        url: '/pages/login/index',
      });
      logout().then();
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
      state.userInfo = storage.getItem('userInfo');
    });
    return { state, doLogout };
  },
};
</script>

<style lang="scss">
.index-wrapper{
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #F6F7F9;
  .navigationBar{
    height: 190px;
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
  .info-card{
    border-top: 0.1px solid transparent;
    margin: 0 auto;
    transform: translateY(-45px);
    width: 345px;
    height: 116px;
    background: #FFF;
    box-shadow: 0px 2px 12px 0px rgba(0, 54, 85, 0.11);
    border-radius: 8px;
    text-align: center;
    .avatar{
      margin-top: -45px;
      image{
        width: 90px;
        height: 90px;
      }
    }
    .name{
      font-size: 18px;
      font-weight: bold;
      color: #20242E;
    }
    .username{
      margin-top: 6px;
      font-size: 14px;
      color: #4E5566;
    }
  }
  .logout-button{
    background: #FFF;
    font-size: 18px;
    color: #20242E;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  &-modal{
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    z-index: 999;
    height: 100vh;
    .modal-content{
      width: 315px;
      height: 140px;
      background: #fff;
      border-radius: 8px;
      margin: 50vh 0 0 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .body{
        height: 95px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        line-height: 95px;
      }
      .footer{
        height: 45px;
        border-top: 1px #D7D9DF solid;
        display: flex;
        view{
          width: 50%;
          font-size: 16px;
          line-height: 44px;
          &.cancel{
            color: #7D8699;
            border-right: 1px #D7D9DF solid;
          }
          &.confirm{
            color: #397AE7;
          }
        }
      }
    }
  }
}
</style>
