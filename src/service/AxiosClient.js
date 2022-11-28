import axios from "axios";

class AxiosClient {
  #axiosInstance;
  constructor(baseURL) {
    this.#axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: "token" + process.env.REACT_APP_API_KEY,
      },
    });
  }

  async get(endPoint, options) {
    return this.#axiosInstance.get(endPoint, options);
  }
}

export default AxiosClient;
