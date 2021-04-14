import axiosClient from "./axiosClient";

const storageApi = {
  uploadFile(token: string, file: Blob) {
    const url = "/storage/";
    axiosClient.post(url);
  },
};

export default storageApi;
