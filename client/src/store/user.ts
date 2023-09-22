import { action, makeObservable, observable } from "mobx";

class UserStore {
  constructor() {
    makeObservable(this)
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
}

const user = new UserStore()

export default user
