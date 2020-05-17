import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  exports: [
    NavMenuComponent,
  ],
})
export class SharedModule { }
