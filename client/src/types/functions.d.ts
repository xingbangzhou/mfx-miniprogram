// 云数据库包含的基础字段
/// <reference path="./db.d.ts" />

type CloudFunctionResultSuccess<T> = {
  success: true;
  data: T;
};

type CloudFunctionResultFail = {
  success: false;
  msg: string;
};

// 云函数返回内容
declare interface CloudFunctionResult<T> extends TaroGeneral.CallbackResult {
  result: CloudFunctionResultSuccess<T> | CloudFunctionResultFail;
}
