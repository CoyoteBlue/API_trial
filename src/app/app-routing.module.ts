import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { SplashComponent } from './splash/splash.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: SplashComponent },
  { path: 'cust', component: CustomerComponent },
  { path: 'menu', component: MenuComponent }
  /*

  { path: 'detail/:id', component: HeroDetailComponent },
   */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
