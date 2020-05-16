import { post, get } from "./axios";

// eslint-disable-next-line import/prefer-default-export
// 查询分页频道
export const channelsQueryAll = (obj) => post("channels/queryAll", obj);

// 查询所有频道
export const channelsQueryList = (obj) => get("channels/queryList", obj);

// 查询文章列表
export const recommendQueryList = (obj) => post("recommend/queryAll", obj);

// 提交文章或者回答
export const saveArticleOrAsk = (obj) => post("recommend/save", obj);

// 查询所有频道以及标签
export const queryLabelList = (obj) => get("channels/queryLabelList", obj);

// 登录
export const userLogin = (obj) => post("user/login", obj);

// 查询单篇文章
export const queryArticle = (obj) => get("recommend/queryOne", obj);

// 点赞
export const voteArticle = (obj) => get("recommend/vote", obj);

// 提交评论
export const submitComment = (obj) => post("comment/save", obj);

// 查询评论
export const queryComment = (obj) => get("comment/queryComment", obj);
