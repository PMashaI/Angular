import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './modules/login/store/counter/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    PlayScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
