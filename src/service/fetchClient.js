class FetchClient {
  #baseURL;
  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  get(endPoint = "", options = {}) {
    const searchParams = new URLSearchParams({ ...options.params });
    return fetch(this.#baseURL + endPoint + "?" + searchParams, { ...options })
      .then((res) => res.json())
      .then((data) => ({ data }));
  }
}

export default FetchClient;
