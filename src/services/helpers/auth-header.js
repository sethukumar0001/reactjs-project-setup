export function authHeader() {
  let access_token = localStorage.getItem("accessToken");
  if (!access_token) {
    return {
      "Content-Type": "application/json",
    };
  } else {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    };
  }
}
