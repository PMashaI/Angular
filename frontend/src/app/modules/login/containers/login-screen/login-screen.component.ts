import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})

export class LoginScreenContainerСomponent implements OnInit { 
  username: string;
  password: string;

  constructor(private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {
    var showSpinner: boolean = true;
  }

  ngOnDestroy() {
  }

}
