import { APP_REFERENCES } from 'src/commons/constants/references.constant';
import AxiosClient from './axios.client';
import logger from 'src/utils/logger.util';

class CountriesClient extends AxiosClient {
  constructor() {
    super();
  }

  async getAllCountries() {
    logger.info('CountriesClient.getAllCountries');
    const { data } = await this.axios.get(APP_REFERENCES.COUNTRIES_ALL_PATH);
    return data;
  }
}

export default CountriesClient;
