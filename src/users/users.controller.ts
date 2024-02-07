import { Body, Controller, Post } from '@nestjs/common';
import UsersService from './users.service';
import { RegisterDto } from './users.dto';

@Controller('users')
export class UsersController {
  @Post('register')
  async register(@Body() registerData: RegisterDto) {
    const usersService = new UsersService();
    const result = await usersService.register(registerData);
    return result;
  }
}
