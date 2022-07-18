class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint)
      .then((response) => response.json());
  }
  
  put(endpoint, body) {
    return fetch(this._send
  }
                 
                 
  _send(method, endpoint, body) {
      return fetch(this.baseUrl + endpoint, {
               
      }
   }
}
