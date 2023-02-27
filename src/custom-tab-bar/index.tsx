import { CoverView, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { memo, useCallback, useState } from "react";
import './index.scss'

const list = [
  {
    pagePath: 'pages/index/index',
    text: '首页'
  },
  {
    pagePath: 'pages/user/index',
    text: '个人中心'
  }
]

const TabBar = memo(function TabBar() {
  const [selected, setSelected] = useState(0)

  const onClicked = useCallback((index: number) => {
    Taro.switchTab({
      url: '/' + list[index].pagePath
    })
    setSelected(index)
  }, [])

  return <CoverView className='customTabBar'>
    {
      list.map((el, index) => <CoverView key={el.text} data-path={el.pagePath} onClick={() => onClicked(index)} className={`tabItem&${selected === index ? ' selected' : ''}`}>
        <Text>{el.text}</Text>
      </CoverView>)
    }
  </CoverView>
})

export default TabBar
