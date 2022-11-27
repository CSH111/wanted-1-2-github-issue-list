import axios from "axios";

class AxiosClient {
  #axiosInstance;
  constructor(baseURL = "https://api.github.com/repos/angular/angular-cli/issues") {
    this.#axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: "token" + process.env.REACT_APP_API_KEY,
      },
    });
  }

  async get(endPoint, rest) {
    return this.#axiosInstance.get(endPoint, rest);
  }
}

export default AxiosClient;
