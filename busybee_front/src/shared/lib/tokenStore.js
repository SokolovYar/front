export function setAccessToken(token) {
  localStorage.setItem("access_token", token);
}

export function getAccessToken() {
  return localStorage.getItem("access_token");
}

export function clearAccessToken() {
  localStorage.removeItem("access_token");
}