import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging-service.service';
import { Account, Status } from '../shared/Account.module';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  Status = Status;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {
    this.accountService.statusUpdated.subscribe((status: Status) => {
      alert('New status: ' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({
      name: accountName,
      status: accountStatus as Status,
    });
    this.loggingService.logStatusChange(accountStatus as Status);
  }
}
