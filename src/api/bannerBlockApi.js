import axiosClient from "./axiosClient";

const bannerBlockApi = {
  getAll() {
    const url = '/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=316&page=1';
    return axiosClient.get(url);
  },

  get(id) {

  },

  add(data) {

  },

  update(data) {

  },

  remove(id) {

  }
};

export default bannerBlockApi;