import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApi(): string {
    return 'Response from get methods';
  }
}
