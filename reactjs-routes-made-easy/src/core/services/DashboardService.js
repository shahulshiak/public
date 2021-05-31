import UsersJson from "../../assets/json/data.json";

export class DashboardService {
  static doGetEmployees = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(UsersJson);
      }, 1500);
    });
  };
}
