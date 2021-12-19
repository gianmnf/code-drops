import { Body, Controller, Post } from '@nestjs/common';
import { SendMailProducerService } from 'src/jobs/sendMail.producer-service';
import { CreateUserDTO } from './create-user.dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailService: SendMailProducerService) {}
  @Post('/')
  async createUser(@Body() createUser: CreateUserDTO) {
    await this.sendMailService.sendMail(createUser);
    return createUser;
  }
}
