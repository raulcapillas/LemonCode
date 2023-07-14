import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { GaleryComponent } from './pages/galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
