class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint).then((response) => response.json());
  }
}
