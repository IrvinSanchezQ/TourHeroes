import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

const routes: Routes = [
 {path: 'dashboard',component: DashboardComponent},
 {path: 'heroes', component: HeroesComponent}, 
 {path:'navbar', component: NavbarComponent},
 {path: '**', pathMatch:'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
