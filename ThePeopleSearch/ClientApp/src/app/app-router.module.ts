import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'address-book', loadChildren: () => import('./modules/address-book/address-book.module').then(m => m.AddressBookModule) },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
