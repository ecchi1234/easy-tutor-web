import axiosClient from "./axiosClient";

const teacherApi = {
  getAll(params: any) {
    const url = "/teacher/";
    return axiosClient.get(url, { params });
  },

  get(id: number) {
    const url = `/teacher/${id}/`;
    return axiosClient.get(url);
  },

  add(data: any) {
    const url = `/teacher/${data.id}/`;
    return axiosClient.post(url, data);
  },

  update(data: any) {
    const url = `/teacher/${data.id}/`;
    return axiosClient.put(url, data);
  },

  remove(id: number) {
    const url = `/teacher/${id}/`;
    return axiosClient.delete(url);
  },

  getComment(id: number) {
    const url = `/teacher/${id}/comment/`;
    return axiosClient.get(url);
  },

  getAvailableRequest(id: number) {
    const url = `/teacher/${id}/available-request/`;
    return axiosClient.get(url);
  },

  login(data: any) {
    const url = "/teacher/login/";
    return axiosClient.post(url, data);
  },

  register(data: any) {
    const url = "/teacher";
    return axiosClient.post(url, data);
  },

  forgotPassword(id: number) {
    const url = "/teacher/forgot-password/";
    return axiosClient.post(url, {
      params: {
        teacher_id: id,
      },
    });
  },

  resetPassword(data: any) {
    const url = "/teacher/reset-pass/";
    return axiosClient.post(url, data);
  },

  schedule(data: any, params: any) {
    const url = "/teacher/schedule";
    return axiosClient.put(url, data, { params });
  },
};

export default teacherApi;
