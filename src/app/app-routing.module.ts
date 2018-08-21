import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { MotyleComponent } from './components/motyle/motyle.component';
import { SalutComponent } from './components/salut/salut.component';
import { FarmaComponent } from './components/farma/farma.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';


const routes: Routes = [
  { path: '', component: MainComponent }, // default is main
  { path: 'motyle', component: MotyleComponent }, // default is main
  { path: 'salut', component: SalutComponent }, // default is main
  { path: 'farma', component: FarmaComponent }, // default is main
  { path: 'kontakt', component: KontaktComponent }, // default is main
  { path: '**', component: PageNotFoundComponent } // no match go to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
