import { useContext, useEffect } from 'react'
import { View } from "@tarojs/components";
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { Cell, CellGroup } from "@antmjs/vantui";

import { TabIndexContext } from 'src/store/tabIndex'
import "./index.scss";

interface Props {}

const Eye: React.FC<Props> = () => {
  const { dispatch } = useContext(TabIndexContext);
  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "eye",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="aboutPage">
      <View className="logo">
        {/* <Image src={logoUrl} /> */}
      </View>
      <View className="desc">描述</View>
      <CellGroup>
        <Cell title="客户服务热线" isLink />
      </CellGroup>
    </View>
  );
};

export default Eye;

definePageConfig({
  navigationBarTitleText: 'mfx'
});
