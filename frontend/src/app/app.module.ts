import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

// All modules 
import { LoginScreenModule } from './modules/login';
import { PlayScreenModule } from './modules/play-screen';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Modules
    LoginScreenModule,
    PlayScreenModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
