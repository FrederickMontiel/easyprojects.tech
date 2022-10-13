import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSessionHomeComponent } from './pages/no-session/no-session-home/no-session-home.component';
import { NoSessionLoginComponent } from './pages/no-session/no-session-login/no-session-login.component';
import { NoSessionProjectsComponent } from './pages/no-session/no-session-projects/no-session-projects.component';

const routes: Routes = [
  { path: '', component : NoSessionHomeComponent },
  { path: 'projects', component : NoSessionProjectsComponent },
  { path: 'login', component : NoSessionLoginComponent },
  { path: 'register', component : NoSessionProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
