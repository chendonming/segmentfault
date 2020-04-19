import { post, get } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const channelsQueryAll = (obj) => post('channels/queryAll', obj);

export const channelsQueryList = (obj) => get('channels/queryList', obj);

export const recommendQueryList = (obj) => post('recommend/queryAll', obj);
