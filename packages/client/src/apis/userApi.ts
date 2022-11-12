import fetcher from "./fetcher";

interface User {
  username: string;
}

export function fetchUserList() {
  return fetcher("/user");
}

export function fetchMyProfile() {
  return fetcher("/user/me");
}

export function signIn(body: User) {
  return fetcher("/user/signIn", body);
}

export function signOut() {
  return fetcher("/user/signOut", {});
}
