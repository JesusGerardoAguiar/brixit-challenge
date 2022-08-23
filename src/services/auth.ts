import axios from "axios";

export const login = (loginData: { email: string; password: string }) =>
  axios
    .post(`/api/authenticate`, loginData)
