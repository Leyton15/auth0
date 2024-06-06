import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PreciosComponent } from './Components/precios/precios.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { InfoComponent } from './Components/info/info.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'precios', component:PreciosComponent},
  {path: 'protegida', component:ProtegidaComponent},
  {path: 'info/:id', component:InfoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}, //Redirección por defecto
  {path: '**', pathMatch: 'full', redirectTo: 'home'}  //Redirección a home para cualquier otra ruta no definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
