import { LoginScreenContainerСomponent } from './containers';
import { LoginScreenRoutes } from './login-screen.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    LoginScreenContainerСomponent
  ],
  imports: [
    CommonModule,
    LoginScreenRoutes
  ]
  })

export class LoginScreenModule { }