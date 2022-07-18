class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint)
      .then((response) => response.json());
  }
  
  put(endpoint, body) {
    return fetch(this._send, "put", body);
  }
                 
                 
  _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
