import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { Account, Status, UpdateAccount } from './shared/Account.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
  }
}
