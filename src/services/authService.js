import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_LOGIN;
const tokenKey = "token";

http.setJwt(getJwt());

export const user = getCurrentUser();

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = getJwt();
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const authService = {
  login,
  loginWithJWT,
  logout,
  user,
  getCurrentUser,
  getJwt,
};

export default authService;
