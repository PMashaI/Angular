import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [
//  {path: '', component: LoginScreenComponent},
//  {path: 'play', component: PlayScreenComponent}
//];

// Default and global routes configuration
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }