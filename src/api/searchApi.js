import axiosClient from "./axiosClient";

export const searchApi = {
  searchTutor(params) {
    const url = "/search/teacher";
    return axiosClient.get(url, params);
  },
};
