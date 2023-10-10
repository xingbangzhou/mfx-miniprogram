import React, { useEffect, useReducer } from "react";
import Taro from "@tarojs/taro";

import "./utils/fix";
import { TabIndexContext, reducerTabIndex, defaultTabIndex } from './stores/tabBar'
import { CLOUD_SERVICE } from "../config/env";

import "./app.scss";

interface Props {
  children: React.ReactElement;
}

const App: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducerTabIndex, defaultTabIndex)

  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init({
        traceUser: true,
        env: CLOUD_SERVICE, // 设置云函数调用环境
      });
    }
  });

  return (
    <TabIndexContext.Provider value={{ tabIndex: state, dispatch }}>
      {props.children}
    </TabIndexContext.Provider>
  )
};

export default App;
