import axios from 'axios';
import { ERROR } from '@/common/constant';
import { $_dispathEvent } from '@/utils';

const uid = sessionStorage.getItem('uid');

const ajax = axios.create({
  baseURL: '/api/',
  headers: {
    uid,
  },
});

function SfError(message = '系统错误', code) {
  this.name = 'SfError';
  this.message = message;
  this.stack = new Error().stack;
  $_dispathEvent(ERROR, {
    message,
    code,
  });
}

SfError.prototype = Object.create(Error.prototype);
SfError.prototype.constructor = SfError;

function axiosCommon() {
  return async function (url, type, params) {
    const getdata = await ajax({
      method: type,
      url,
      [type.toLowerCase() === 'get' ? 'params' : 'data']: params,
    })
      .catch((e) => {
        throw new SfError(e.message, e.response.status);
      });
    if (getdata.data.code === 200) {
      return getdata.data;
    }

    throw new SfError(getdata.data.msg, getdata.data.code);
  };
}

export const get = (url, params) => axiosCommon()(url, 'get', params);

export const post = (url, params) => axiosCommon()(url, 'post', params);
