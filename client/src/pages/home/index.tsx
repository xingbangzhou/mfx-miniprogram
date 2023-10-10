import { memo, useContext, useEffect, useState } from 'react'
import { CoverImage, CoverView, View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from 'mobx-react'

import { TabIndexContext } from 'src/stores/tabBar'
import LogoPng from 'src/assets/logo.png'

import './index.scss'

const NavBar = memo(function NavBar() {
  return (
    <CoverView className="nav-bar">
      <CoverImage className="nav-bar-logo" src={LogoPng} />
      <CoverView className="nav-bar-title">欢迎光临</CoverView>
    </CoverView>
  )
})

const Home: React.FC<unknown> = () => {
  const { dispatch } = useContext(TabIndexContext);

  const [imgList] = useState([
    "cloud://cloud1-8g1xq6ly7cf0d196.636c-cloud1-8g1xq6ly7cf0d196-1321060259/example2.png",
    "cloud://cloud1-8g1xq6ly7cf0d196.636c-cloud1-8g1xq6ly7cf0d196-1321060259/example1.png",
    "cloud://cloud1-8g1xq6ly7cf0d196.636c-cloud1-8g1xq6ly7cf0d196-1321060259/example0.png"
  ])

  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})


  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "home",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="home-page">
      <NavBar />
      <View className="content">
        <Swiper className="content-swiper" autoplay circular interval={1000} indicatorDots indicatorColor="rgba((44,44,44,0.3)" indicatorActiveColor="rgba(18,150,219,0.3)">
          {
            imgList.map(img => (
              <SwiperItem key={img}>
                <Image src={img} />
              </SwiperItem>
            ))
          }
        </Swiper>
      </View>
    </View>
  )
}

export default observer(Home)

definePageConfig({
  navigationStyle: "custom"
});
