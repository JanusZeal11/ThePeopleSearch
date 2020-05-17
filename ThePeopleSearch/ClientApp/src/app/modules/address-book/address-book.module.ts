import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

import { ListViewComponent } from './presentation/list-view/list-view.component';
import { EditorComponent } from './presentation/editor/editor.component';

import { AddressBookService } from './services/address-book.service';

const routes: Routes = [
  { path: '', component: ListViewComponent },
  { path: 'detail/:id', component: EditorComponent },
];

@NgModule({
  declarations: [
    ListViewComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    AddressBookService,
  ]
})
export class AddressBookModule { }
