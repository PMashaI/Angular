
import { NgModule } from '@angular/core';
import { PlayScreenModule } from './play-screen.module';
import { LoginScreenModule } from './login-screen.module';

@NgModule({
    imports: [
      PlayScreenModule,
      LoginScreenModule
    ]
  })

export class PagesModule { }