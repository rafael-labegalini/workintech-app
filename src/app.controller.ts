import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from "os";

@Controller()
export class AppController {

  @Get()
  @Render("index")
  getIndex() {
    return {
      title: "WorkInTech - Tech Event"
    };
  }

  @Get("hostname")
  getHello() {
    return {
      hostname: os.hostname()
    }
  }
}
