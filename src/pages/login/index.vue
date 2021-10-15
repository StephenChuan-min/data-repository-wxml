<template>
  <view class="login-wrapper">
    <view class="loading" v-if="state.loading"><image src="../../assets/img/logo_loading1.gif" /></view>
    <view class="navigationBar">
      <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
      <view class="logo"><image src="../../assets/img/sign_logo.png" /></view>
    </view>
    <view class="form-content">
      <view class="form-item">
        <text class="iconfont icon-xiaochengxu-zhanghao"></text>
        <input
            ref="username"
            placeholder="请输入11位账号"
            maxlength="11"
            :class="state.errorField.username.isError ? 'is-error' : ''"
            @change="(e) => handleChange(e, 'username')"
        />
        <view class="is-error-msg" v-if="state.errorField.username.isError">{{state.errorField.username.message}}</view>
      </view>
      <view class="form-item">
        <text class="iconfont icon-xiaochengxu-mima"></text>
        <input
            ref="password"
            type="password"
            placeholder="请输入密码"
            maxlength="20"
            :class="state.errorField.password.isError ? 'is-error' : ''"
            @change="(e) => handleChange(e, 'password')"
        />
        <view class="is-error-msg" v-if="state.errorField.password.isError">{{ state.errorField.password.message }}</view>
      </view>
      <view class="form-item" v-if="state.code.show">
        <text class="iconfont icon-xiaochengxu-yanzhengma"></text>
        <input
            v-model.trim="params.imageVerifyCode"
            placeholder="请输入图片验证码"
            maxlength="4"
            :class="state.errorField.imageVerifyCode.isError ? 'is-error' : ''"
        />
        <view class="suffix" @click="getImgCode"><image :src="state.code.imgUrl" /></view>
        <view class="is-error-msg" v-if="state.errorField.imageVerifyCode.isError">{{ state.errorField.imageVerifyCode.message }}</view>
      </view>
      <button class="login-btn" type="primary" :disabled="state.disabled" @click="doLogin">登录</button>
    </view>
  </view>
</template>

<script>
import { reactive, onMounted, getCurrentInstance } from 'vue';
import { login, imgCode } from '../../server/api/login';
import { encryptInfo } from '../../utils/encrypt';
import { clearEmpty } from '../../utils';
import Taro from '@tarojs/taro';

export default {
  name: 'Login',
  setup() {
    const { proxy } = getCurrentInstance();
    const params = reactive({
      username: '',
      password: '',
      imageVerifyCode: '',
    });

    const state = reactive({
      loading: false,
      style: {
        marginTop: '',
        lineHeight: '',
      },
      code: {
        imgUrl: '',
        show: false,
      },
      disabled: !true,
      errorField: {
        username: {
          isError: false,
          message: '请输入账号',
        },
        password: {
          isError: false,
          message: '请输入密码',
        },
      },
    });

    const rules = {
      username: [
        { required: true, message: '请输入账号' },
        { min: 11, trigger: 'change', message: '账号小于11位' }
      ],
      password: [
        { required: true, message: '请输入密码' },
      ],
    };

    const validate = () => {
      let valid = true;
      Object.keys(rules).forEach((key) => {
        rules[key].forEach((item) => {
          if (item.required) {
            state.errorField[key].isError = (Boolean(params[key]) !== item.required);
            state.errorField[key].message = item.message;
          }
          if (item.min) {
            state.errorField[key].isError = (params[key].length < item.min);
            if (item.required && state.errorField[key].isError) state.errorField[key].message = item.message;
          }
        })
      });
      const keys = Object.keys(state.errorField);
      for (let i = 0; i < keys.length; i++) {
        if (state.errorField[keys[i]].isError) {
          valid = false;
          break;
        }
      }
      return valid;
    };

    const handleChange = (e, prop) => {
      const { value } = e.target;
      switch (prop) {
        case 'username':
          proxy.$refs[prop].value = params[prop] = value.replace(/\D/g, '');
          break;
        case 'password':
          proxy.$refs[prop].value = params[prop] = value.replace(/\u4e00-\u9fa5/g, '');
          break;
        default:
          break
      }
      rules[prop].forEach((item) => {
        if (item.required) {
          state.errorField[prop].isError = (Boolean(params[prop]) !== item.required);
          state.errorField[prop].message = item.message;
        }
        if (item.min) {
          state.errorField[prop].isError = (params[prop].length < item.min);
          state.errorField[prop].message = item.message;
        }
      });
    };

    const getImgCode = () => {
      imgCode().then((res) => {
        if (res.code === 200) {
          state.code.imgUrl = res.data;
        }
      });
    };

    const doLogin = () => {
      const valid = validate();
      if (valid) {
        state.loading = true;
        const data = encryptInfo(clearEmpty(params));
        login(data).then((res) => {
          if (res.data.errCount === 3) {
            state.code.show = true;
            getImgCode();
          }
          if (res.code === 200) {
            Taro.switchTab({
              url: '/pages/index/index',
            });
            Taro.showToast({
              title: '登录成功',
              icon: 'none',
            });
          }
        }).finally(() => {
          state.loading = false;
        });
      }
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
    });
    return { params, state, validate, handleChange, getImgCode, doLogin };
  }
};
</script>

<style lang="scss">
.login-wrapper{
  position: relative;
  height: 100vh;
  background-color: #fff;
  .loading{
    background-color: rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: 16px;
    image{
      width: 80px;
      height: 80px;
    }
  }
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
      left: 17px;
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
      z-index: 9;
      image{
        width: 100%;
        height: 100%;
        border-radius: 21px;
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
