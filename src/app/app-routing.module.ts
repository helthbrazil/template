import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { SitiosComponent } from './paginas/sitios/sitios.component';
import { BuscaAvancadaComponent } from './paginas/busca-avancada/busca-avancada.component';
import { AnuncieAquiComponent } from './paginas/anuncie-aqui/anuncie-aqui.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'sitios',
  component: SitiosComponent
},
{
  path: 'buscaAvancada',
  component: BuscaAvancadaComponent
},
{
  path: 'anuncie',
  component: AnuncieAquiComponent
},
{
  path: 'contato',
  component: ContatoComponent
},
{
  path: 'login',
  component: LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
