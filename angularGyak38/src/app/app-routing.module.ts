import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HaromszogKerComponent } from './haromszog-ker/haromszog-ker.component';
import { FelhasznaloNevComponent } from './felhasznalo-nev/felhasznalo-nev.component';
import { DiakokComponent } from './diakok/diakok.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'haromszogKer', component: HaromszogKerComponent },
  { path: 'felhasznaloNev', component: FelhasznaloNevComponent},
  { path: 'diakok', component: DiakokComponent},
  { path: 'notfound', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
