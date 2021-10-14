<template>
  <view class="login-wrapper">
    <view class="navigationBar">
      <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
      <view class="logo"><image src="../../assets/img/sign_logo.png" /></view>
    </view>
    <view class="form-content">
      <view class="form-item">
        <text class="iconfont icon-xiaochengxu-zhanghao"></text>
        <input
            v-model="params.username"
            placeholder="请输入11位账号"
            maxlength="11"
            class="is-error"
            @input="handleChange"
        />
        <view class="is-error-msg">请输入账号</view>
      </view>
      <view class="form-item">
        <text class="iconfont icon-xiaochengxu-mima"></text>
        <input
            v-model="params.password"
            type="password"
            placeholder="请输入密码"
            maxlength="20"
            class="is-error"
        />
        <view class="is-error-msg">请输入密码</view>
      </view>
      <view class="form-item">
        <text class="iconfont icon-xiaochengxu-yanzhengma"></text>
        <input v-model.trim="params.imageVerifyCode" placeholder="请输入图片验证码" maxlength="4" />
        <view class="suffix"><image src="" /></view>
      </view>
      <button class="login-btn" type="primary" :disabled="state.disabled" @click="doLogin">登录</button>
    </view>
  </view>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { login } from '../../server/api/login';
import { encryptInfo } from '../../utils/encrypt';
import { clearEmpty } from '../../utils';
import Taro from '@tarojs/taro';

export default {
  name: 'Login',
  setup() {
    const params = reactive({
      username: '55555555555',
      password: '555555',
      imageVerifyCode: '',
    });

    const state = reactive({
      style: {
        marginTop: '',
        lineHeight: '',
      },
      disabled: !true,
    });

    const validate = () => {

    };

    const handleChange = (e) => {
      const { value } = e.target;
      params.username = value.replace(/\D/g, '');
    };

    const doLogin = () => {
      const data = encryptInfo(clearEmpty(params));
      login(data).then((res) => {
        if (res.code === 200) {
          Taro.switchTab({
            url: '/pages/index/index',
          });
        }
      })
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
    });
    return { params, state, validate, handleChange, doLogin };
  }
};
</script>

<style lang="scss">
page{
  background-color: #fff;
}
.login-wrapper{
  .navigationBar{
    height: 270px;
    overflow: hidden;
    background: no-repeat url('../../assets/img/login-bg.png');
    background-size: cover;
    &-title{
      font-size: 17px;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
    }
    .logo{
      width: 85px;
      height: 85px;
      margin: 0 auto;
      image{
        width: 100%;
        height: 100%;
        margin-top: 60px;
      }
    }
  }
  .form-content{
    padding-top: 40px;
    position: relative;
    width: 295px;
    margin: 0 auto;
    .form-item{
      margin-bottom: 20px;
    }
    &::before{
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid transparent;
      border-bottom: 15px solid #fff;
    }
    input{
      position: relative;
      box-sizing: border-box;
      padding-left: 46px;
      width: 295px;
      height: 42px;
      border: 1px solid #C5C7CE;
      border-radius: 21px;
      &.is-error{
        border: 1px #FF6666 solid;
      }
    }
    .is-error-msg{
      position: absolute;
      left: 46px;
      color: #FF6666;
      font-size: 12px;
    }
    .input-placeholder{
      font-size: 15px;
      color: #B2B8C9;
    }
    .iconfont{
      position: absolute;
      left: 17.5px;
      color: #7D8699;
      font-size: 17px;
      line-height: 42px;
    }
    .suffix{
      width: 109px;
      height: 40px;
      position: absolute;
      right: 0;
      bottom: 82px;
      border: 1px solid #C5C7CE;
      border-radius: 21px;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .login-btn{
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      line-height: 42px;
      height: 42px;
      margin-top: 40px;
      border-radius: 21px;
      background-color:  #397AE7;
      &[aria-disabled=true]{
        background-color: rgba(57, 122, 231, 0.4);
      }
    }
  }
}
</style>
