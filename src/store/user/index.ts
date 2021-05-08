import { userState } from './userStateDS'

const user = {
  state: () => ({
    userinfo: {
      name: 'sxc',
      sex: 'man'
    }
  }),
  mutations: {
    change_userinfo(state: userState, userinfo: any) {
      state.userinfo = userinfo
    }
  },
  actions: {},
  getters: {
    userName(state: userState) {
      return state.userinfo.name
    }
  }
}

export default {
  ...user,
  namespaced: true
}