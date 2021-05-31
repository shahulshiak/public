import AsyncStorage from '@react-native-community/async-storage';

export class Storagehelper {
  static ACCESS_TOKEN = 'access-token';
  static USER_DATA = 'user-data';

  static getAccessToken = async () =>
    await AsyncStorage.getItem(Storagehelper.ACCESS_TOKEN);
  static setAccessToken = async (token) =>
    await AsyncStorage.setItem(Storagehelper.ACCESS_TOKEN, token);

  static getUserData = async () => {
    const data = await AsyncStorage.getItem(Storagehelper.USER_DATA);
    return JSON.parse(data);
  }

  static setUserData = async (data) => {
    const userData = JSON.stringify(data);
    await AsyncStorage.setItem(Storagehelper.USER_DATA, userData);
  }

  static clearToken = async () =>
    await AsyncStorage.removeItem(Storagehelper.ACCESS_TOKEN);
  static clearUserData = async () =>
    await AsyncStorage.removeItem(Storagehelper.USER_DATA);
  static clearStorage = async () => await AsyncStorage.clear();
}
