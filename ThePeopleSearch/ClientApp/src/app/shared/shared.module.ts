import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ConfirmDialogComponent } from './presentation/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    NavMenuComponent,
    ConfirmDialogComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
