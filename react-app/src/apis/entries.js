import axios from "axios";

class EntriesApi {
  config = {
    baseURL: "http://localhost",
    port: 3000
  };
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${this.config.baseURL}:${this.config.port}`
    });
  }

  getEntries() {
    return this.httpClient
      .get("/usersRoutes")
      .then(response =>
        response.data
      );
  }
}


export default new EntriesApi();