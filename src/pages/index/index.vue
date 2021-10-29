<template>
  <view class="index-wrapper">
    <view class="toast" v-show="state.toast.show">{{state.toast.title}}</view>
    <view class="index-wrapper-dialog" data-id="index-wrapper-dialog" v-show="state.visible" @click="close">
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
    <view class="index-wrapper-picker" data-id="index-wrapper-picker" v-show="state.pickerVisible" @click="close">
      <view class="picker-content">
        <view
            v-for="item in state.pickerOptions"
            :key="item.key"
            :class="['picker-option', state.pickerOptions.length === 3 ?
            (item.key == state.userEditParams.userEdit.auctionDataType ? 'pickered' : '') :
            (item.key == state.userEditParams.userEdit.creditorDataType ? 'pickered' : '')]"
            @click="handlePicker(item.key)"
        >
          {{item.label}}
        </view>
      </view>
    </view>
    <view class="fixed">
      <view class="navigationBar">
        <view class="navigationBar-title" :style="state.style">源诚数据资产平台</view>
      </view>
      <view class="block search-block">
        <view class="search-input" @click="doSearch">
          <text class="iconfont icon-xiaochengxu-sousuo"></text>
          <input disabled="true" placeholder="请输入账号或姓名" />
          <view class="suffix suffix-search">搜索</view>
        </view>
        <view class="tab-block">
          <view class="tab-content">
            <view v-for="item in state.tabs" :key="item.key" :class="['tabpane-item', state.params.role === item.key ? 'is-active' : '']" @click="tabClick(item.key)">{{item.label}}</view>
          </view>
          <view :class="['select-structured', state.visible ? 'is-active' : '']" @click="state.visible = !state.visible">
            {{ structuredType }}<text :class="['iconfont', state.visible ? 'icon-xiaochengxu-jiantoushang' : 'icon-xiaochengxu-jiantouxia']" /></view>
        </view>
      </view>
    </view>
    <view class="loading" v-if="state.loading"><image src="../../assets/img/logo_loading2.gif" /></view>
    <scroll-view
        style="height: calc(100vh - 199px)"
        :scroll-y="true"
        :refresher-enabled="true"
        refresher-background="#F6F7F9"
        refresher-default-style="none"
        :refresher-threshold="20"
        :refresher-triggered="state.refreshPull.triggered"
        @refresherpulling="refresherPulling"
        @refresherrefresh="refresherRefresh"
        @refresherabort="refresherAbort"
        @scrolltolower="scrollToLower"
    >
      <view slot="refresher" class="refresh-container" v-if="state.refreshPull.refreshLoading">
        <image src="../../assets/img/logo_loading2.gif" />
        <view style="color: #7D8699;font-size: 13px">{{state.refreshPull.label}}</view>
      </view>
      <view class="index-wrapper-content" v-if="!state.loading">
        <view class="empty" v-if="!state.loading && state.userList.length === 0">
          <image src="../../assets/img/empty.png" />
          <view style="color: #7D8699;font-size: 15px">暂无数据</view>
        </view>
        <view class="user-list-container" v-for="item in state.userList" :key="item.id">
          <view class="block">
            <view class="name">{{item.name || '-'}}</view>
            <view class="info">
              <view class="id">ID：{{item.id || '-'}}</view>
              <view class="username">账号：{{item.username || '-'}}</view>
            </view>
            <view class="operate-block">
              <view v-if="item.structuredObject.includes('资产拍卖数据')" class="operate-card" @click="openMask('auctionDataType', item)">
                <view class="title"><image src="../../assets/img/zcpm.png" />资产拍卖数据</view>
                <view class="select">{{ state.auctionDataType[item.auctionDataType] }}<text class="iconfont icon-xiaochengxu-jiantouxia" /></view>
              </view>
              <view v-if="item.structuredObject.includes('破产重组数据')" class="operate-card">
                <view class="title"><text class="iconfont icon-xiaochengxu-pochanzhongzu" />破产重组数据</view>
                <view class="select">-</view>
              </view>
              <view v-if="item.structuredObject.includes('拍卖债权数据')" class="operate-card" @click="openMask('creditorDataType', item)">
                <view class="title"><image src="../../assets/img/pmzq.png" />拍卖债权数据</view>
                <view class="select">{{ state.creditorDataType[item.creditorDataType] }}<text class="iconfont icon-xiaochengxu-jiantouxia" /></view>
              </view>
              <view v-if="item.structuredObject.includes('招商债权数据')" class="operate-card">
                <view class="title"><text class="iconfont icon-xiaochengxu-zhaoshangzhaiquanshuju" />招商债权数据</view>
                <view class="select">-</view>
              </view>
            </view>
          </view>
        </view>
        <view class="lower-loading" v-if="state.toLowerLoading">加载中...</view>
        <nut-divider v-if="state.dividerVisible">我是有底线的</nut-divider>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { onMounted, reactive, computed } from 'vue';
import Taro from "@tarojs/taro";
import { clearEmpty } from "../../utils";
import { userView, userEdit } from '../../server/api/index';
import { auctionDataType, auctionDataTypeA,  creditorDataType, creditorDataTypeA } from './source';

export default {
  name: 'Index',
  onHide() {
    this.state.visible = false;
    this.state.pickerVisible = false;
  },
  setup() {
    const state = reactive({
      auctionDataType,
      creditorDataType,
      loading: false,
      toast: {
        show: false,
        title: '',
      },
      refreshPull: {
        triggered: false,
        refreshLoading: false,
        label: '松开刷新',
      },
      visible: false,
      pickerVisible: false,
      dividerVisible: false,
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
        isEnabledUser: true,
        page: 1,
      },
      userEditParams: {
        id: '',
        userEdit: {
          auctionDataType: 0,
          creditorDataType: 0,
          functionId: [],
          name: '',
          roleId: '',
        },
      },
      structuredObject: [
        { label: '全部', key: '' },
        { label: '资产拍卖数据', key: 8 },
        { label: '破产重组数据', key: 11 },
        { label: '拍卖债权数据', key: 26 },
        { label: '招商债权数据', key: 29 },
      ],
      userList: [],
      pickerOptions: [
        { label: '普通数据', key: 0 },
        { label: '相似数据', key: 2 },
        { label: '非初标数据', key: 3 },
      ],
      toLowerLoading: false,
    });

    const structuredType = computed(() => state.structuredObject.find((item) => item.key === state.params.functions).label);

    const toast = (title) => {
      state.toast.show = true;
      state.toast.title = title;
      const timer = setTimeout(() => {
        state.toast.show = false;
        clearTimeout(timer);
      }, 1500);
    };

    const hideToast = () => {
      state.toast.show = false;
    };

    const getList = () => {
      state.loading = true;
      state.dividerVisible = false;
      state.toLowerLoading = false;
      userView(clearEmpty(state.params)).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          state.userList = data.data || [];
          state.userList.forEach((item) => {
            Object.keys(auctionDataTypeA).forEach((i) => {
              if (item.structuredObject.includes(auctionDataTypeA[i])) {
                item.auctionDataType = i;
              }
            });
            Object.keys(creditorDataTypeA).forEach((j) => {
              if (item.structuredObject.includes(creditorDataTypeA[j])) {
                item.creditorDataType = j;
              }
            });
          });
        }
      }).catch((res) => {
        toast('网络异常...');
      }).finally(() => {
        state.loading = false;
      });
    };

    const doSearch = () => {
      Taro.navigateTo({
        url: '/pages/search/index',
      });
    };

    const tabClick = (key) => {
      if (state.params.role === key) return;
      state.dividerVisible = false;
      state.params.role = key;
      state.params.page = 1;
      state.params.functions = '';
      state.visible = false;
      getList();
    };

    const handleSelect = (key) => {
      state.visible = false;
      if (state.params.functions === key) return;
      state.dividerVisible = false;
      state.params.functions = key;
      state.params.page = 1;
      getList();
    };

    const openMask = (which, item) => {
      let functionId = [];
      state.structuredObject.forEach((i) => {
        if (item.structuredObject.includes(i.label)) {
          functionId.push(i.key);
        }
      });
      state.userEditParams.id = item.id;
      state.userEditParams.userEdit.name = item.name;
      state.userEditParams.userEdit.roleId = state.params.role;
      state.userEditParams.userEdit.creditorDataType = item.creditorDataType == -1 ? '' : item.creditorDataType;
      state.userEditParams.userEdit.auctionDataType = item.auctionDataType == -1 ? '' : item.auctionDataType;
      state.userEditParams.userEdit.functionId = functionId;
      state.pickerVisible = true;
      switch (which) {
        case 'auctionDataType':
          state.pickerOptions = [
            { label: '普通数据', key: 0 },
            { label: '相似数据', key: 2 },
            { label: '非初标数据', key: 3 },
          ];
          break;
        case 'creditorDataType':
          state.pickerOptions = [
            { label: '普通数据', key: 0 },
            { label: '非初标数据', key: 1 },
          ];
          break;
        default:
          break;
      };
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

    const refresherPulling = () => {
      state.refreshPull.label = '松开刷新';
      state.refreshPull.refreshLoading = true;
    };

    const refresherRefresh = () => {
      state.refreshPull.triggered = true;
      state.refreshPull.label = '刷新中';
      state.dividerVisible = false;
      state.dividerVisible = false;
      state.toLowerLoading = false;
      state.params.page = 1;
      userView(clearEmpty(state.params)).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          state.userList = data.data || [];
        }
      }).finally(() => {
        state.refreshPull.refreshLoading = false;
        state.refreshPull.triggered = false;
      });
    };

    const refresherAbort = () => {
      state.refreshPull.refreshLoading = false;
    };

    const scrollToLower = () => {
      if (!state.dividerVisible) {
        state.toLowerLoading = true;
        state.params.page++;
        userView(clearEmpty(state.params)).then((res) => {
          const { data } = res;
          if (data.code === 200) {
            const list = data.data || [];
            if (list.length === 0) {
              state.dividerVisible = true;
            } else {
              list.forEach((item) => {
                Object.keys(auctionDataTypeA).forEach((i) => {
                  if (item.structuredObject.includes(auctionDataTypeA[i])) {
                    item.auctionDataType = i;
                  }
                });
                Object.keys(creditorDataTypeA).forEach((j) => {
                  if (item.structuredObject.includes(creditorDataTypeA[j])) {
                    item.creditorDataType = j;
                  }
                });
              });
            }
            state.userList = [...state.userList, ...list];
          }
        }).finally(() => {
          state.toLowerLoading = false;
        });
      }
    };

    const handlePicker = (key) => {
      const { id, userEdit: data } = state.userEditParams;
      const temp = state.userList.find((item) => item.id === id);
      state.pickerVisible = false;
      if (state.pickerOptions.length === 3) {
        if (state.userEditParams.userEdit.auctionDataType == key) return;
        state.userEditParams.userEdit.auctionDataType = key;
        temp.auctionDataType = key;
      } else {
        if (state.userEditParams.userEdit.creditorDataType == key) return;
        state.userEditParams.userEdit.creditorDataType = key;
        temp.creditorDataType = key;
      }
      userEdit(id, clearEmpty(data)).then((res) => {
        const { data } = res;
        // getList();
        if (data.code === 200) {
          toast('操作成功');
        } else {
          toast('操作失败, 请重试');
        }
      });
    };

    onMounted(() => {
      const { height, top }= Taro.getMenuButtonBoundingClientRect();
      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
      getList();
    });
    return {
      state,
      structuredType,
      tabClick,
      doSearch,
      handleSelect,
      openMask,
      close,
      refresherPulling,
      refresherRefresh,
      refresherAbort,
      scrollToLower,
      handlePicker,
    };
  },
};
</script>

<style lang="scss">
.index-wrapper{
  box-sizing: border-box;
  padding-top: 199px;
  position: relative;
  background-color: #F6F7F9;
  min-height: 100vh;
  .loading{
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    border-radius: 16px;
    image{
      width: 80px;
      height: 80px;
    }
  }
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
          color: #20242E;
          font-size: 20px;
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
        transform: translateY(-7px);
        .tab-content{
          display: flex;
          .tabpane-item{
            box-sizing: border-box;
            padding-top: 4px;
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
                margin-top: -6px;
              }
            }
          }
        }
        .select-structured{
          box-sizing: border-box;
          padding: 3px 10px 0 10px;
          height: 46px;
          position: relative;
          font-size: 14px;
          color: #7D8699;
          line-height: 30px;
          .iconfont{
            font-size: 7px;
            color: #7D8699;
            margin-left: 6px;
            vertical-align: 3px;
          }
          &.is-active{
            background-color: #F4F5F7;
            border-radius: 16px 16px 0 0;
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
              image{
                width: 15px;
                height: 15px;
                margin-right: 6px;
                vertical-align: -2px;
              }
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
              .iconfont{
                font-size: 5px;
                margin-left: 6px;
                vertical-align: 3px;
              }
            }
          }
        }
      }
    }
    .lower-loading{
      text-align: center;
      font-size: 12px;
      color: #7D8699;
      padding-bottom: 10px;
    }
    .nut-divider{
      width: 275px;
      margin: 0 auto;
      font-size: 12px;
      color: #7D8699;
      padding-bottom: 10px;
      &::before,
      &::after{
        border: none;
        background-color: #D7D9DF;
        height: 1px;
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
        &~.select-item{
          margin-top: 10px;
        }
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
      border-bottom: 1px solid #D7D9DF;
      padding: 15px 0 30px 0;
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
  .refresh-container{
    padding: 10px;
    text-align: center;
    image{
      width: 40px;
      height: 40px;
    }
  }
}
.empty{
  height: calc(100vh - 199px);
  text-align: center;
  background-color: #fff;
  image{
    margin-top: 99px;
    width: 160px;
    height: 100px;
  }
}
</style>
