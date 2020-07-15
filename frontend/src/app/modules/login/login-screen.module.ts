import { LoginScreenContainerСomponent } from './containers';
import { LoginScreenRoutes } from './login-screen.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/reducer';


@NgModule({
  declarations: [
    LoginScreenContainerСomponent
  ],
  imports: [
    CommonModule,
    LoginScreenRoutes,

    StoreModule.forRoot(counterReducer)
  ]
  })

export class LoginScreenModule { }