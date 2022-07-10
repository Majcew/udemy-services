import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService],
})
export class AppComponent {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;
  constructor(private counterService: CounterService) {
    this.counterService.activeToInactive.subscribe(
      (value) => (this.activeToInactive = value)
    );
    this.counterService.inactiveToActive.subscribe(
      (value) => (this.inactiveToActive = value)
    );
  }
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }
  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
