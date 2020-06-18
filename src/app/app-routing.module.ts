import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { PlayScreenComponent } from './components/play-screen/play-screen.component';


const routes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'play', component: PlayScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
