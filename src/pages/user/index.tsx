import { View, Text, Icon } from '@tarojs/components'
import { memo } from 'react'
import './index.scss'

const UserPage = memo(function UserPage() {

  return <View className='userPage'>
    <View>
      <Icon type='circle' size='60' />
      <Text>用户名</Text>
    </View>
  </View>
})

export default UserPage
