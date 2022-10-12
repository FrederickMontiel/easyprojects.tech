import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoSessionHomeComponent } from './pages/no-session/no-session-home/no-session-home.component';
import { HeaderComponent } from './components/complex/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NoSessionHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
