import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from "os";

@Controller()
export class AppController {

  @Get()
  getHello() {
    return {
      hostname: os.hostname()
    }
  }
}
