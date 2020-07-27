import { LoginScreenContainerСomponent } from './containers';
import { LoginScreenRoutes } from './login-screen.routes';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginScreenContainerСomponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginScreenRoutes
  ]
  })

export class LoginScreenModule { }