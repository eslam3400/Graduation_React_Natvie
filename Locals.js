import AsyncStorage from '@react-native-async-storage/async-storage'

class Local {
  static getToken() {
    return AsyncStorage.getItem('token')
  }

  static setToken(token) {
    AsyncStorage.setItem('token', token)
  }
}

export default Local