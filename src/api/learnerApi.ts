import axiosClient from "./axiosClient";

export interface IUserRegister {
  display_name: string;
  email: string;
  password: string;
  phone_number: string;
  username: string;
}

export interface IUserLogin {
  password: string;
  username: string;
}

const learnerApi = {
  register(data: IUserRegister) {
    const url = "/user/";
    return axiosClient.post(url, data);
  },

  login(data: IUserLogin) {
    const url = "/user/login/";
    return axiosClient.post(url, data);
  },
};

export default learnerApi;
