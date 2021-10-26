<template>
  <view class="index-wrapper">
    <view class="index-wrapper-modal" v-if="state.modalVisible">
      <view class="modal-content">
        <view class="body">确认删除全部历史记录？</view>
        <view class="footer">
          <view class="cancel" @click="state.modalVisible = false">取消</view>
          <view class="confirm" @click="delRecords">确定</view>
        </view>
      </view>
    </view>
    <view class="index-wrapper-picker" data-id="index-wrapper-picker" v-if="state.pickerVisible" @click="close">
      <view class="picker-content">
        <view
            v-for="item in state.pickerOptions"
            :key="item.key"
            :class="['picker-option', state.pickerOptions.length === 3 ?
            (item.key === state.userEditParams.userEdit.auctionDataType ? 'pickered' : '') :
            (item.key === state.userEditParams.userEdit.creditorDataType ? 'pickered' : '')]"
            @click="handlePicker(item.key)"
        >
          {{item.label}}
        </view>
      </view>
    </view>
    <view class="fixed">
      <view class="navigationBar">
        <view class="navigationBar-title" :style="state.style"><view @click="goBack"><text class="iconfont icon-xiaochengxu-fanhui" /></view>源诚数据资产平台</view>
      </view>
      <view class="block search-block">
        <view class="search-input">
          <text class="iconfont icon-xiaochengxu-sousuo"></text>
          <native-input @change="handleChange" @confirm="({detail}) => doSearch(detail)" :value="state.params.username" :auto-focus="!state.flag" />
          <view :class="['suffix', state.flag ? 'suffix-cancel' : 'suffix-search']" @click="() => doSearch()">{{ state.flag ? '取消' : '搜索' }}</view>
          <view v-if="state.params.username" @click="clear" class="suffix suffix-iconfont">
            <text class="iconfont icon-xiaochengxu-shanchu" />
          </view>
        </view>
      </view>
    </view>
    <view class="loading" v-if="state.loading"><image src="../../assets/img/logo_loading2.gif" /></view>
    <view class="search-record" v-if="!state.loading && !state.flag">
      <view v-if="state.records.length !== 0 && state.usernameList.length === 0">
        <view class="record-head">
          <view class="title">搜索记录</view>
          <view @click="state.modalVisible = true"><text class="iconfont icon-xiaochengxu-lajixiang" /></view>
        </view>
        <view class="record-content">
          <view class="record-content-item" v-for="item in state.records" @click="doSearch(item)">{{item}}</view>
        </view>
      </view>
      <view class="username-list">
        <view class="username-list-item" v-for="item in state.usernameList" @click="doSearch(item)">{{item}}</view>
      </view>
    </view>
    <view class="index-wrapper-content" v-if="!state.loading && state.flag">
      <view class="empty" v-if="state.userList.length === 0">
        <image src="../../assets/img/search-empty.png" />
        <view style="color: rgba(0, 0, 0, 0.87);font-size: 14px">搜索无内容</view>
      </view>
      <view class="user-list-container" v-for="item in state.userList" :key="item.id">
        <view class="block">
          <view :class="['name', item.role === '正式' ? 'formal' : 'try']">{{item.name || '-'}}</view>
          <view class="info">
            <view class="id">ID：{{item.id || '-'}}</view>
            <view class="username">账号：{{item.username || '-'}}</view>
          </view>
          <view class="operate-block">
            <view v-if="item.auctionDataType !== -1" class="operate-card" @click="openMask('auctionDataType', item)">
              <view class="title"><text class="iconfont icon-xiaochengxu-zichanpaimai" />资产拍卖数据</view>
              <view class="select">{{ state.auctionDataType[item.auctionDataType] }}<text class="iconfont icon-xiaochengxu-jiantouxia" /></view>
            </view>
            <view v-if="item.structuredObject.match(new RegExp('破产重组数据', 'g'))" class="operate-card">
              <view class="title"><text class="iconfont icon-xiaochengxu-pochanzhongzu" />破产重组数据</view>
              <view class="select">-</view>
            </view>
            <view v-if="item.creditorDataType !== -1" class="operate-card" @click="openMask('creditorDataType', item)">
              <view class="title"><text class="iconfont icon-xiaochengxu-paimaizhaiquanshuju" />拍卖债权数据</view>
              <view class="select">{{ state.creditorDataType[item.creditorDataType] }}<text class="iconfont icon-xiaochengxu-jiantouxia" /></view>
            </view>
            <view v-if="item.structuredObject.match(new RegExp('招商债权数据', 'g'))" class="operate-card">
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
import { onMounted, reactive } from 'vue';
import Taro from "@tarojs/taro";
import {clearEmpty, debounce, storage, toast} from "../../utils";
import {userEdit, userView} from '../../server/api/index';
import { auctionDataType, creditorDataType } from '../index/source';

export default {
  name: 'Search',
  setup() {
    const state = reactive({
      auctionDataType,
      creditorDataType,
      loading: false,
      pickerVisible: false,
      modalVisible: false,
      records: [],
      style: {
        marginTop: '',
        lineHeight: '',
      },
      params: {
        username: '',
        isEnabledUser: true,
      },
      structuredObject: [
        { label: '全部', key: '' },
        { label: '资产拍卖数据', key: 8 },
        { label: '破产重组数据', key: 11 },
        { label: '拍卖债权数据', key: 26 },
        { label: '招商债权数据', key: 29 }
      ],
      userList: [],
      usernameList: [],
      userEditParams: {
        id: '',
        userEdit: {
          auctionDataType: 0,
          creditorDataType: 0,
          functionId: [8, 11, 26, 29],
          name: "",
          roleId: '',
        },
      },
      pickerOptions: [
        { label: '普通数据', key: 0 },
        { label: '相似数据', key: 2 },
        { label: '非初标数据', key: 3 },
      ],
      flag: false,
    });

    const getList = () => {
      state.loading = true;
      state.flag = true;
      userView(state.params).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          state.userList = data.data || [];
        }
      }).finally(() => {
        state.loading = false;
      });
    };

    const goBack = () => {
      Taro.navigateBack({
        delta: 1,
      });
    };

    const clear = () => {
      state.params.username = '';
      state.usernameList = [];
      state.flag = false;
    };

    const handleChange = debounce((e) => {
      state.params.username = e.detail;
      const username = state.params.username.replace(/\s/g, '');
      if (username) {
        state.flag = false;
        userView({ username, ...state.params }).then((res) => {
          const { data } = res;
          if (data.code === 200) {
            state.usernameList = [];
            (data.data || []).forEach((item) => {
              state.usernameList.push(item.name);
            });
          }
        });
      } else {
        state.usernameList = [];
      }
    }, 300);

    const delRecords = () => {
      storage.removeItem('records');
      state.records = [];
      state.modalVisible = false;
    };

    const doSearch = (item) => {
      if (state.flag) {
        goBack();
      } else {
        if (item) state.params.username = item;
        const username = state.params.username = state.params.username.replace(/\s/g, '');
        if (!username) return toast('请输入用户名或账号');
        state.records.unshift(state.params.username);
        const records = state.records = [...new Set(state.records)].splice(0, 10);
        storage.setItem('records', records);
        getList();
      }
    };

    const openMask = (which, item) => {
      state.userEditParams.id = item.id;
      state.userEditParams.userEdit.name = item.name;
      state.userEditParams.userEdit.roleId = item.role === '正式' ? 1 : 0;
      state.userEditParams.userEdit.creditorDataType = item.creditorDataType === -1 ? '' : item.creditorDataType;
      state.userEditParams.userEdit.auctionDataType = [0 , 1].includes(item.auctionDataType)
          ? 0 : item.auctionDataType === -1 ? '' : item.auctionDataType;
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
      }
    };

    const handlePicker = (key) => {
      const { id, userEdit: data } = state.userEditParams;
      if (state.pickerOptions.length === 3) {
        state.userEditParams.userEdit.auctionDataType = key;
      } else {
        state.userEditParams.userEdit.creditorDataType = key;
      }
      state.pickerVisible = false;
      userEdit(id, clearEmpty(data)).then((res) => {
        // const { data } = res;
        getList();
        // if (data.code === 200) {
        //   toast('操作成功');
        // } else {
        //   toast('操作失败, 请重试');
        // }
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
      state.records = storage.getItem('records') || [];
    });
    return { state, doSearch, openMask, close, handleChange, delRecords, clear, handlePicker, goBack };
  },
};
</script>

<style lang="scss">
.index-wrapper{
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 138px;
  position: relative;
  background-color: #F6F7F9;
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
        position: relative;
        font-size: 17px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: center;
        view{
          position: absolute;
          left: 15px;
        }
      }
    }
    .search-block{
      height: 14px;
      .search-input{
        transform: translateY(-26px);
        position: relative;
        z-index: 9;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0px 2px 10px 0px rgba(26, 64, 156, 0.12);
        .native-input{
          height: 40px;
          box-sizing: border-box;
          padding: 0 110px 0 45px;
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
          &-iconfont{
            width: 20px;
            right: 100px;
            .iconfont{
              line-height: 30px;
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
          &::after{
            font-size: 12px;
            padding: 0 8px;
            font-weight: normal;
            margin-left: 10px;
          }
          &.formal::after{
            content: '正式';
            color: #1EC884;
            border: 1px solid #1EC884;
          }
          &.try::after{
            content: '试用';
            color: #FD9C26;
            border: 1px solid #FD9C26;
          }
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
  .search-record{
    padding: 20px 15px;
    background-color: #fff;
    height: calc(100vh - 178px);
    .record-head{
      display: flex;
      justify-content: space-between;
      .title{
        font-size: 16px;
        font-weight: bold;
        color: #20242E;
      }
      .iconfont{
        color: #7D8699;
      }
    }
    .record-content{
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
      &-item{
        height: 24px;
        background-color: #EFF2F7;
        font-size: 13px;
        color: #7D8699;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        margin: 0 10px 10px 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .username-list{
    &-item{
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      font-size: 14px;
      color: #20242E;
      border-bottom: 1px #D7D9DF solid;
    }
  }
}
.empty{
  height: calc(100vh - 138px);
  text-align: center;
  background-color: #fff;
  image{
    margin-top: 99px;
    width: 144px;
    height: 120px;
  }
}
</style>
