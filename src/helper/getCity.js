import data from "../data/tinh_tp";

export const getCity = () => {
  let list = [];
  for (const property in data) {
    list.push(data[property]);
  }
  return list;
};
