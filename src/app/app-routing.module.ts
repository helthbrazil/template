import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { BuscaAvancadaComponent } from './components/busca-avancada/busca-avancada.component';
import { AnuncieAquiComponent } from './components/anuncie-aqui/anuncie-aqui.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
