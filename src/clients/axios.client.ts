import axios, { Axios } from 'axios';
import { APP_REFERENCES } from 'src/commons/constants/references.constant';

class AxiosClient {
  axios: Axios;
  constructor() {
    this.axios = axios.create({
      baseURL: APP_REFERENCES.COUNTRIES_BASE_URL,
      timeout: 10000,
    });
  }
}

export default AxiosClient;
