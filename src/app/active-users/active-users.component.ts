import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  users: string[] = [];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(
    private userService: UsersService,
    private counterService: CounterService
  ) {
    this.users = this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    // this.counterService.activeToInactive.emit();
  }
}
