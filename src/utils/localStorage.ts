import AsyncStorage from "@react-native-community/async-storage"

class LocalStorage {
  setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.error('don`t set data to localstorage')
    }
  }

  getItem = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch (e) {
      console.error('don`t get data to localstorage')
    }
  }

  removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.error('don`t remove data from localstorage')
    }
  }
}

export const localStorage = new LocalStorage