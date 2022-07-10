import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging-service.service';
import { Account, Status, UpdateAccount } from '../shared/Account.module';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  Status = Status;
  @Input() account!: Account;
  @Input() id!: number;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onSetTo(status: Status) {
    this.accountService.updateAccount({ id: this.id, newStatus: status });
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
