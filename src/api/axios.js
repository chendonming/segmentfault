import axios from 'axios';
import { ERROR } from '@/common/constant';
import { $$dispathEvent } from '@/utils';

const ajax = axios.create({
  baseURL: '/api/',
});

function SfError(message = '系统错误') {
  this.name = 'SfError';
  this.message = message;
  this.stack = (new Error()).stack;
  $$dispathEvent(ERROR, { message });
}

SfError.prototype = Object.create(Error.prototype);
SfError.prototype.constructor = SfError;

export const get = async (url, parmas) => {
  const getdata = await ajax({
    method: 'get',
    url,
    parmas,
  });

  return getdata.data;
};

export const post = async (url, data) => {
  const getdata = await ajax({
    method: 'post',
    url,
    data,
  });

  if (getdata.data.code === 200) {
    return getdata.data;
  }

  throw new SfError();
};
