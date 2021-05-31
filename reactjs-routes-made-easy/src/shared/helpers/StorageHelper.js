export class Storagehelper {
  static ACCESS_TOKEN = "access-token";
  static USER_DATA = "user-data";

  static getAccessToken = () => localStorage.getItem(Storagehelper.ACCESS_TOKEN);
  static setAccessToken = (token) => localStorage.setItem(Storagehelper.ACCESS_TOKEN, token);


  static getUserData = () => {
    const data = localStorage.getItem(Storagehelper.USER_DATA);
    return JSON.parse(data);
  };

  static setUserData = (data) => {
    const userData = JSON.stringify(data);
    localStorage.setItem(Storagehelper.USER_DATA, userData);
  };


  static clearToken    = () => localStorage.removeItem(Storagehelper.ACCESS_TOKEN);
  static clearUserData = () => localStorage.removeItem(Storagehelper.USER_DATA);
  static clearStorage  = () => localStorage.clear();

  static hasToken = () => {
    const token = this.getAccessToken();
    if (token && token.trim() !== '') {
      return true;
    }
    return false;
  }
}
