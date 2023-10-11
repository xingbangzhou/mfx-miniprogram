// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require("wx-server-sdk");
const TcbRouter = require("tcb-router");
const { getProductList } = require("./methods/getProductList");

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,
});


exports.main = async (event, context) => {
  event.cloud = cloud
  const app = new TcbRouter({event})

  // 获取产品列表
  app.router("product/list", getProductList)

  return app.serve();
};
