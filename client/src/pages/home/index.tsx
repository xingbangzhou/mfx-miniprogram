import { useContext, useEffect, useState } from 'react'
import { View, Image } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from 'mobx-react'
import { Swiper, SwiperItem } from '@antmjs/vantui'

import { TabIndexContext } from 'src/store/tabIndex'
import TittleBar from './TittleBar'

import './index.scss'

interface Props {}

const Home: React.FC<Props> = () => {
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
      <TittleBar />
      <View className="content">
        <View className="content-swiper">
          <Swiper height={128} autoPlay="1000" paginationColor="#426543" paginationVisible loop>
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
    </View>
  )
}

export default observer(Home)

definePageConfig({
  navigationStyle: "custom"
});
