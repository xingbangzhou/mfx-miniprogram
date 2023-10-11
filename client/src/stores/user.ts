import { action, makeObservable, observable } from "mobx"
import Taro from "@tarojs/taro"

import { loginUser, isLogin, wxLogin } from "src/services/login"
import { USER_INFO_STORAGE } from "src/constants/storages"
import Toast from "src/components/toast"

class User {
  constructor() {
    makeObservable(this)

    const info = Taro.getStorageSync<UserDb>(USER_INFO_STORAGE)
    if (info) {
      this.loadInfo(info)
    }
  }

  @observable
  id = ''
  @action
  setId(value: string) {
    this.id = value
  }
  @observable
  name = ''
  @action
  setName(value: string) {
    this.name = value
  }

  @observable
  avatar = ''
  @action
  setAvatar(value: string) {
    this.avatar = value
  }

  async login() {
    if (isLogin()) return true
    try {
      const loginRes = await wxLogin()
      if (loginRes) {
        const userRes = await loginUser(loginRes.userInfo)
        if (userRes.result.success) {
          const info = userRes.result.data
          Taro.setStorageSync(USER_INFO_STORAGE, info)
          this.loadInfo(info)
          return true
        }
      }
    } catch(error) {
      console.error(error)
      Toast.fail("登录失败")
    }

    return false
  }

  private loadInfo(info: UserDb) {
    this.setName(info.nickName)
    this.setAvatar(info.avatarUrl)
    this.setId(info._id)
  }
}

const user = new User()

export default user
