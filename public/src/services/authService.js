class AuthService {
  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static clear() {
    localStorage.clear();
  }

  static saveUserInfo(data) {
    const { token, email } = data;

    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static getEmail() {
    return localStorage.getItem("email");
  }
}

export default AuthService;
