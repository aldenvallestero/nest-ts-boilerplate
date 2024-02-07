import { HttpException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ERRORS } from 'src/commons/constants/errors.constant';
import { TRegister } from 'src/commons/constants/types.contant';
import logger from 'src/utils/logger.util';

class UsersService {
  model: PrismaClient;
  constructor() {
    this.model = new PrismaClient();
  }
  register({ email, name, address }: TRegister) {
    try {
      logger.info('UsersService.register');
      this.model.user.create({
        data: {
          email,
          name,
          address,
        },
      });
    } catch (error) {
      logger.error(JSON.stringify(error));
      throw new HttpException(
        ERRORS.INTERNAL_SERVER_ERROR_MESSAGE,
        ERRORS.INTERNAL_SERVER_ERROR_CODE,
      );
    }
  }
}

export default UsersService;
