import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { UsersController } from './users/users.controller';
@Module({
  imports: [],
  controllers: [CountriesController, UsersController],
  providers: [],
})
export class AppModule {}
