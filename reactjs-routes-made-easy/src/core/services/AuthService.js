export class AuthService {

  static doAuthUser = (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.username === "hruday@gmail.com" &&
          credentials.password === "hruday123"
        ) {
          resolve({
            accessToken: "abscgsjash128172812",
            userData: {
              email: credentials.username,
            },
          });
        } else {
          reject({ error: 'AUTH_FAILED' });
        }
      }, 1000);
    });
  };

}
