import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div class="hello">Hello World!</div>';
  }
}
