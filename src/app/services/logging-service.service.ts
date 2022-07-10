import { Injectable } from '@angular/core';
import { Status } from '../shared/Account.module';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logStatusChange(status: Status) {
    console.log('A server status changed, new status: ' + status);
  }

  constructor() {}
}
