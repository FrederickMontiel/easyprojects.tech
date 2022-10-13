import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoSessionHomeComponent } from './pages/no-session/no-session-home/no-session-home.component';
import { HeaderComponent } from './components/complex/header/header.component';
import { NoSessionProjectsComponent } from './pages/no-session/no-session-projects/no-session-projects.component';
import { NoSessionLoginComponent } from './pages/no-session/no-session-login/no-session-login.component';
import { NoSessionRegisterComponent } from './pages/no-session/no-session-register/no-session-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NoSessionHomeComponent,
    HeaderComponent,
    NoSessionProjectsComponent,
    NoSessionLoginComponent,
    NoSessionRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
