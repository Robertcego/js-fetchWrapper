class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
}
