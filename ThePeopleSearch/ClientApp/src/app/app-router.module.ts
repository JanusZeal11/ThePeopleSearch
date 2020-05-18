import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', redirectTo: '/address-book', pathMatch: 'full' },
  {
    path: 'address-book',
    loadChildren: () => import('./modules/address-book/address-book.module').then(m => m.AddressBookModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ]
})
export class AppRouterModule { }
