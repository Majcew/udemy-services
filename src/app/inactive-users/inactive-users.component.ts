import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  users: string[] = [];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {
    this.users = this.usersService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    // this.counterService.inactiveToActive.emit();
  }
}
