import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HeaderComponent } from './shared/header/header.component';
import { CardJobComponent } from './components/card-job/card-job.component';
import { PartnerLogoComponent } from './components/partner-logo/partner-logo.component';
import { ButtonClickComponent } from './components/button-click/button-click.component';
// import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardJobComponent,
    PartnerLogoComponent,
    ButtonClickComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    // MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
