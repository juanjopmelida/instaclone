import jwdecode from "jwt-decode";
import { TOKEN } from "./constans";

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function decodeToken(token) {
  return jwdecode(token);
}
