import { action, makeObservable, observable } from "mobx";
import Taro from "@tarojs/taro";

import { cloudLogin } from "src/services/login";
import { USER_INFO_STORAGE } from "src/constants/storages";

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

  async login(profile: {userInfo: Taro.UserInfo; [key: string]: any}) {
    const userRes = await cloudLogin(profile.userInfo)
    if (userRes.result.success) {
      const info = userRes.result.data
      Taro.setStorageSync(USER_INFO_STORAGE, info)
      this.loadInfo(info)
      return true;
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
