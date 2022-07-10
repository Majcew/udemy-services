import { Injectable, EventEmitter } from '@angular/core';
import { Account, Status, UpdateAccount } from '../shared/Account.module';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  statusUpdated = new EventEmitter<Status>();
  _accounts: Account[] = [
    {
      name: 'Master Account',
      status: Status.ACTIVE,
    },
    {
      name: 'Testaccount',
      status: Status.INACTIVE,
    },
    {
      name: 'Hidden Account',
      status: Status.UNKNOWN,
    },
  ];

  addAccount(account: Account) {
    this._accounts.push(account);
  }

  updateAccount(accountData: UpdateAccount) {
    this._accounts[accountData.id].status = accountData.newStatus;
  }

  getAccounts(): Account[] {
    return this._accounts;
  }
}
