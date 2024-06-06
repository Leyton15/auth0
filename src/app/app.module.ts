import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { PreciosComponent } from './Components/precios/precios.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { InfoComponent } from './Components/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
    providers: [
      provideAuth0({
        domain: 'dev-cabkvntex4fm2wga.us.auth0.com',
        clientId: 'M85h7pNFSBNl3oHDIIsjD2KDKlkSWstx',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
