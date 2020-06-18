import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './modules/pages.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
