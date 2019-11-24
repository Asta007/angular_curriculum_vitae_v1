import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { QuatreCentQuatreComponent } from './quatre-cent-quatre/quatre-cent-quatre.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { InfoComponent } from './info/info.component';
import { ContacteComponent } from './contacte/contacte.component';
import { HttpClientModule } from '@angular/common/http';

const myroutes:	Routes = [
  { path: '', component:InfoComponent},
  { path: 'info', component:InfoComponent},
  { path: 'contacte', component:ContacteComponent},
  { path: 'parcours', component:ParcoursComponent},
  { path: '404', component:QuatreCentQuatreComponent},
  { path: '**', redirectTo:'/404'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuatreCentQuatreComponent,
    ParcoursComponent,
    InfoComponent,
    ContacteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
