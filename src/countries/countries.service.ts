import { HttpException } from '@nestjs/common';
import axiosClient from 'src/clients/axios.client';
import { APP_REFERENCES } from 'src/commons/constants/references.constant';
import logger from 'src/utils/logger.util';

class CountriesService {
  async getAllCountries() {
    try {
      logger.info('CountriesService.getAllCountries');
      const { data } = await axiosClient.axios.get(
        APP_REFERENCES.COUNTRIES_ALL_PATH,
      );
      return data;
    } catch (error) {
      logger.error(
        `CountriesService.getAllCountries: ${JSON.stringify(error)}`,
      );
      throw new HttpException('Internal Error', 500);
    }
  }
}

export default new CountriesService();
