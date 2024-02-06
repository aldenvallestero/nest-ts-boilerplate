import axios, { Axios } from 'axios';
import { APP_REFERENCES } from 'src/commons/constants/references.constant';
import logger from 'src/utils/logger.util';

class AxiosClient {
  axios: Axios;
  constructor() {
    this.axios = axios.create({
      baseURL: APP_REFERENCES.COUNTRIES_BASE_URL,
      timeout: 10000,
    });
    this.axios.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        logger.error(error?.response?.data?.message);
        return Promise.reject(error);
      },
    );
  }
}

export default AxiosClient;
