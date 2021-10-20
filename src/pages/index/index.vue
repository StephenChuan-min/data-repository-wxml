<template>
  <view class="index-wrapper">
    <view class="index-wrapper-dialog" data-id="index-wrapper-dialog" v-if="state.visible" @click="close">
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
    </view >
    <view class="index-wrapper-picker" data-id="index-wrapper-picker" v-if="state.pickerVisible" @click="close">
      <view class="picker-content">
        <view class="picker-option pickered">普通数据</view>
        <view class="picker-option">相似数据</view>
        <view class="picker-option">非初标数据</view>
      </view>
    </view>
    <view class="fixed">
      <view class="navigationBar">
        <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
      </view>
      <view class="block search-block">
        <view class="search-input">
          <text class="iconfont icon-xiaochengxu-sousuo"></text>
          <input placeholder="请输入账号或姓名" @focus="doSearch"/>
          <view class="suffix suffix-search" @click="doSearch">搜索</view>
        </view>
        <view class="tab-block">
          <view class="tab-content">
            <view v-for="item in state.tabs" :key="item.key" :class="['tabpane-item', state.params.role === item.key ? 'is-active' : '']" @click="tabClick(item.key)">{{item.label}}</view>
          </view>
          <view :class="['select-structured', state.visible ? 'is-active' : '']" @click="state.visible = !state.visible">全部</view>
        </view>
      </view>
    </view>
    <view class="index-wrapper-content">
      <view class="empty" v-if="state.userList.length === 0">
        <image src="../../assets/img/empty.png" />
        <view style="color: rgba(0, 0, 0, 0.87);font-size: 14px">暂无数据</view>
      </view>
      <view class="user-list-container" v-for="item in state.userList" :key="item.id">
        <view class="block">
          <view class="name">{{item.name}}</view>
          <view class="info">
            <view class="id">ID：{{item.id}}</view>
            <view class="username">账号：{{item.username}}</view>
          </view>
          <view class="operate-block">
            <view class="operate-card" @click="openMask">
              <view class="title"><text class="iconfont icon-xiaochengxu-zichanpaimai" />资产拍卖数据</view>
              <view class="select">非初标数据</view>
            </view>
            <view class="operate-card">
              <view class="title"><text class="iconfont icon-xiaochengxu-pochanzhongzu" />破产重组数据</view>
              <view class="select">-</view>
            </view>
            <view class="operate-card">
              <view class="title"><text class="iconfont icon-xiaochengxu-paimaizhaiquanshuju" />拍卖债权数据</view>
              <view class="select">非初标数据</view>
            </view>
            <view class="operate-card">
              <view class="title"><text class="iconfont icon-xiaochengxu-zhaoshangzhaiquanshuju" />招商债权数据</view>
              <view class="select">-</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { onMounted, reactive, watch } from 'vue';
import Taro from "@tarojs/taro";
import { clearEmpty } from "../../utils";
import { userView } from '../../server/api/index';

export default {
  name: 'Index',
  setup() {
    const state = reactive({
      visible: false,
      pickerVisible: false,
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
        functions: '',
      },
      structuredObject: [
        { label: '全部', key: '' },
        { label: '资产拍卖数据', key: 8 },
        { label: '破产重组数据', key: 11 },
        { label: '拍卖债权数据', key: 26 },
        { label: '招商债权数据', key: 29 }
      ],
      userList: [
        {
          auctionDataType: 0,
          creditorDataType: 0,
          id: 1,
          name: "DoyuTu",
          role: "正式",
          structuredObject: "资产结构化",
          username: "12345678901",
          wrongNum: 0,
        },
        {
          auctionDataType: 0,
          creditorDataType: 0,
          id: 1,
          name: "DoyuTu",
          role: "正式",
          structuredObject: "资产结构化",
          username: "12345678901",
          wrongNum: 0,
        }
      ],
    });

    watch(() => state.pickerVisible, (newVal) => {
      if (!newVal) Taro.showTabBar();
    });

    const doSearch = () => {
      Taro.navigateTo({
        url: '/pages/search/index',
      });
    };

    const tabClick = (key) => {
      state.params.role = key;
      state.visible = false;
    };

    const handleSelect = (key) => {
      state.params.functions = key;
    };

    const openMask = () => {
      Taro.hideTabBar({
        success: () => {
          state.pickerVisible = true;
        },
      });
    };

    const close = (e) => {
      const { id } = e.target.dataset;
      switch (id) {
        case 'index-wrapper-dialog':
          state.visible = false;
          break;
        case 'index-wrapper-picker':
          state.pickerVisible = false;
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
      userView(clearEmpty(state.params)).then((res) => {
        console.log(res);
      });
    });
    return { state, tabClick, doSearch, handleSelect, openMask, close };
  },
};
</script>

<style lang="scss">
.index-wrapper{
  padding-top: 199px;
  position: relative;
  background-color: #F6F7F9;
  .block{
    background-color: #fff;
    padding: 0 15px;
  }
  .fixed{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
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
  &-content{
    .user-list-container{
      .block{
        padding: 15px;
        margin-bottom: 10px;
        .name{
          font-size: 16px;
          font-weight: bold;
          color: #20242E;
        }
        .info{
          display: flex;
          font-size: 14px;
          margin-top: 10px;
          color: #4E5566;
          view{
            margin-right: 50px;
          }
        }
        .operate-block{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .operate-card{
            padding: 10px;
            box-sizing: border-box;
            background-color: #F6F7F9;
            width: 167.5px;
            margin-top: 10px;
            border-radius: 4px;
            .title{
              font-size: 14px;
              color: #20242E;
              .iconfont{
                color: #397AE7;
                margin-right: 6px;
              }
            }
            .select{
              font-size: 13px;
              color: #7D8699;
              margin-top: 5px;
              margin-left: 22px;
            }
          }
        }
      }
    }
  }
  &-dialog{
    position: fixed;
    top: 199px;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: calc(100vh - 199px);
    z-index: 99;
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
  &-picker{
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    z-index: 999;
    height: 100vh;
    .picker-content{
      padding: 15px 0;
      text-align: center;
      margin-top: 100vh;
      transform: translateY(-100%);
      background-color: #fff;
      border-radius: 16px 16px 0px 0px;
      .picker-option{
        margin-top: 15px;
        font-size: 16px;
        color: #4E5566;
        &.pickered{
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
