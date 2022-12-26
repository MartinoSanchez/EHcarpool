import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RiderComponent } from './rider/rider.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RiderComponent,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
