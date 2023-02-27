import {  memo, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

const IndexPage = memo(function IndexPage() {

  useEffect(() => {

  }, [])

  return <View className='indexPage'>
    <Text>Hello world!</Text>
  </View>
})

export default IndexPage
