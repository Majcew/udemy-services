import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // activeToInactive = new EventEmitter<void>();
  // inactiveToActive = new EventEmitter<void>();
  activeToInactive: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  inactiveToActive: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  ActiveToInactive() {
    this.activeToInactive.next(this.activeToInactive.value + 1);
  }

  InactiveToActive() {
    this.inactiveToActive.next(this.inactiveToActive.value + 1);
  }

  constructor() {}
}
