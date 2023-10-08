import { useContext, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from 'mobx-react'
import { Cell, CellGroup } from '@antmjs/vantui'

import { TabIndexContext } from 'src/store/tabIndex'
import userStore from 'src/store/userStore'
import OrderSVG from "src/assets/mine/order.svg"
import AboutSVG from "src/assets/mine/about.svg"

import "./index.scss"

const Mine = () => {
  const { dispatch } = useContext(TabIndexContext);

  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "mine",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="minePage">
      <View className="mine">
        <View className="info">
          <Image src={userStore.avatar} className="avatar" />
          <View className="message">
            <View className="name">{userStore.name}</View>
          </View>
        </View>
        <View className="content">
          <View className="operation">
            <CellGroup inset>
              <Cell
                title="我的订单"
                isLink
                renderIcon={<Image src={OrderSVG} className="icon" />}
              />
              <Cell
                title="关于我们"
                isLink
                renderIcon={<Image src={AboutSVG} className="icon" />} // onClick={() => Router.toAbout()}
              />
            </CellGroup>
          </View>
        </View>
      </View>
    </View>
  )
}

definePageConfig({
  navigationStyle: "custom"
});

export default observer(Mine)
