import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})

export class LoginScreenContaineromponent implements OnInit {
  count$: Observable<number>;
  subscription: Subscription;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
    this.subscription = this.count$.subscribe();
    console.log(this.subscription);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
