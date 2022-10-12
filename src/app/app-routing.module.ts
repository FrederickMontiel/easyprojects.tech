import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSessionHomeComponent } from './pages/no-session/no-session-home/no-session-home.component';

const routes: Routes = [
  { path: '', component : NoSessionHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
