const { DB_PRODUCTS } = require("../constants/database");

const getProductList = async (ctx, next) => {
  const { _req: {
    event: { cloud }
  }} = ctx;
  const db = cloud.database();
  try {
    const dbRes = await db.collection(DB_PRODUCTS).get();
    const list = dbRes.data
    ctx.body = {
      success: true,
      data: list,
    }
  } catch(err) {
    console.error(err)
    ctx.body = {
      success: false,
      msg: "数据库执行错误",
    }
  }
}

module.exports = {
  getProductList   
}