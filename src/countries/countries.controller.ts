import { Controller, Get } from '@nestjs/common';
import countriesService from './countries.service';

@Controller('countries')
export class CountriesController {
  @Get('all')
  async getAllCountries() {
    const result = countriesService.getAllCountries();
    return result;
  }
}
