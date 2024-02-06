import { HttpException } from '@nestjs/common';
import countriesClient from 'src/clients/countries.client';
import logger from 'src/utils/logger.util';

class CountriesService {
  async getAllCountries() {
    try {
      logger.info('CountriesService.getAllCountries');
      const result = countriesClient.getAllCountries();
      return result;
    } catch (error) {
      logger.error(
        `CountriesService.getAllCountries: ${JSON.stringify(error)}`,
      );
      throw new HttpException('Internal Error', 500);
    }
  }
}

export default new CountriesService();
