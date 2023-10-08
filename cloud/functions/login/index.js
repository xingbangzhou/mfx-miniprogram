// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require("wx-server-sdk");

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,
});


exports.main = async (event, context) => {
  const { userInfo } = event;

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext();
  const dbUsers = cloud.database().collection("users");
  const _openid = wxContext.OPENID;

  // 添加用户信息到数据库
  try {
    const user = await dbUsers.where({ _openid }).get();
    if (user.data && user.data.length > 0) {
      return {
        success: true,
        data: user.data[0],
      };
    } else {
      const data = { ...userInfo, _openid };
      await dbUsers.add({
        data: data,
      });
      return {
        success: true,
        data: data,
      };
    }
  } catch (error) {
    return {
      success: false,
      msg: error,
    };
  }
};
