import axiosClient from "./axiosClient";

// export interface IPostProps {
//   description: string;
//   exact_location: string;
//   fri_afternoon: boolean;
//   fri_morning: boolean;
//   fri_night: boolean;
//   gender: string;
//   location: 0;
//   method: string;
//   monday_afternoon: boolean;
//   monday_morning: boolean;
//   monday_night: boolean;
//   number_of_student: 0;
//   phone_number: string;
//   price: 0;
//   sat_afternoon: boolean;
//   sat_morning: boolean;
//   sat_night: boolean;
//   subject: string;
//   sun_afternoon: boolean;
//   sun_morning: boolean;
//   sun_night: boolean;
//   thu_afternoon: boolean;
//   thu_morning: boolean;
//   thu_night: boolean;
//   time: 0;
//   times_per_week: 0;
//   title: string;
//   tue_afternoon: boolean;
//   tue_morning: boolean;
//   tue_night: boolean;
//   wed_afternoon: boolean;
//   wed_morning: boolean;
//   wed_night: boolean;
// }

export const requestApi = {
  getAll(params) {
    const url = "/request/";
    return axiosClient.get(url);
  },
  createPost(data) {
    const url = "/request/";
    return axiosClient.post(url, data, {
      headers: {
        token: JSON.parse(localStorage.getItem("token")),
      },
    });
  },
};
