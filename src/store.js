/* eslint-disable */
import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  channel: {}, // 当前频道,
  channelList: [], // 频道集合
  bg: '',
};

const mutations = {
  setChannel(state, channel) {
    state.channel = channel;
  },
  setChannelList(state, list) {
    state.channelList = list;
  },
  setBg(state, bg) {
    state.bg = bg;
  }
};

const getters = {
  getChannel: state => state.channel,
  getChannelList: state => state.channelList,
  getBg: state => state.bg
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
