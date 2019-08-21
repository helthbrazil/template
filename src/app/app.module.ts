import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { SitiosComponent } from './paginas/sitios/sitios.component';
import { BuscaAvancadaComponent } from './paginas/busca-avancada/busca-avancada.component';
import { AnuncieAquiComponent } from './paginas/anuncie-aqui/anuncie-aqui.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { LoginComponent } from './paginas/login/login.component';
import { ItemSitioComponent } from './components/item-sitio/item-sitio.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SitiosComponent,
    BuscaAvancadaComponent,
    AnuncieAquiComponent,
    ContatoComponent,
    LoginComponent,
    ItemSitioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
