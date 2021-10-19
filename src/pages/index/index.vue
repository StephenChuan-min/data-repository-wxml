<template>
  <view class="index-wrapper">
    <view class="index-wrapper-dialog" v-if="state.visible">
      <view class="select-block">
        <view
            :class="['select-item', item.key === state.params.functions ? 'is-selected' : '']"
            v-for="item in state.structuredObject" :key="item.key"
            @click="handleSelect(item.key)"
        >
          <text v-if="item.key === state.params.functions" class="iconfont icon-xiaochengxu-xuanzhong" />
          <text v-else class="iconfont icon-xiaochengxu-xuanzhong" style="color: transparent" />
          {{item.label}}
        </view>
      </view>
    </view>
    <view class="navigationBar">
      <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
    </view>
    <view class="index-wrapper-content">
      <view class="block search-block">
        <view class="search-input">
          <text class="iconfont icon-xiaochengxu-sousuo"></text>
          <input placeholder="请输入账号或姓名" @focus="handleFocus"/>
          <view class="suffix suffix-search" @click="doSearch">搜索</view>
        </view>
        <view class="tab-block">
          <view class="tab-content">
            <view v-for="item in state.tabs" :key="item.key" :class="['tabpane-item', state.params.role === item.key ? 'is-active' : '']" @click="tabClick(item.key)">{{item.label}}</view>
          </view>
          <view :class="['select-structured', state.visible ? 'is-active' : '']" @click="state.visible = !state.visible">全部</view>
        </view>
      </view>
      <view class="empty">
        <image src="../../assets/img/empty.png" />
        <view style="color: rgba(0, 0, 0, 0.87);font-size: 14px">暂无数据</view>
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
import { userView } from '../../server/api/index';

export default {
  name: 'Index',
  setup() {
    const state = reactive({
      visible: false,
      style: {
        marginTop: '',
        lineHeight: '',
        windowHeight: '',
        screenHeight: '',
      },
      tabs: [
        { label: '正式', key: 1 },
        { label: '试用', key: 0 },
      ],
      params: {
        username: '',
        role: 1,
        functions: '',
      },
      structuredObject: [
        { label: '全部', key: '' },
        { label: '资产拍卖数据', key: 8 },
        { label: '破产重组数据', key: 11 },
        { label: '拍卖债权数据', key: 26 },
        { label: '招商债权数据', key: 29 }
      ]
    });

    const handleFocus = () => {
      Taro.navigateTo({
        url: '/pages/search/index',
      });
    };

    const doSearch = () => {
      console.log('搜索...')
    };

    const tabClick = (key) => {
      state.params.role = key;
    };

    const handleSelect = (key) => {
      state.params.functions = key;
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
    });
    return { state, tabClick, handleFocus, doSearch, handleSelect };
  },
};
</script>

<style lang="scss">
.index-wrapper{
  position: relative;
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
        justify-content: space-between;
        .tab-content{
          display: flex;
          .tabpane-item{
            box-sizing: border-box;
            padding-top: 5px;
            font-size: 16px;
            color: #4E5566;
            margin-right: 40px;
            &.is-active{
              padding-top: 0;
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
        .select-structured{
          box-sizing: border-box;
          width: 61px;
          height: 39px;
          position: relative;
          font-size: 14px;
          color: #7D8699;
          padding-left: 10px;
          line-height: 30px;
          &::after{
            position: absolute;
            right: 10px;
            top: 12px;
            content: '';
            display: block;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #7D8699;
            border-bottom: 5px solid transparent;
          }
          &.is-active{
            background-color: #F4F5F7;
            border-radius: 16px 16px 0 0;
            &::after{
              top: 8px;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid transparent;
              border-bottom: 5px solid #7D8699;
            }
          }
        }
      }
    }
  }
  &-dialog{
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: calc(100vh - 199px);
    .select-block{
      box-sizing: border-box;
      height: 180px;
      padding: 20px 17px;
      background: #F4F5F7;
      border-radius: 0px 0px 16px 16px;
      .select-item{
        font-size: 14px;
        color: #4E5566;
        margin-top: 10px;
        &.is-selected{
          color: #397AE7;
        }
      }
    }
  }
}
.empty{
  height: 111px;
  text-align: center;
  margin-top: 99px;
  image{
    width: 160px;
    height: 100px;
  }
}
</style>
