import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatChipsModule,
  MatGridListModule,
} from '@angular/material';

import { DetailsViewComponent } from './presentation/details-view/details-view.component';
import { EditorComponent } from './presentation/editor/editor.component';
import { ListViewComponent } from './presentation/list-view/list-view.component';

import { AddressBookService } from './services/address-book.service';

const routes: Routes = [
  { path: '', component: ListViewComponent },
  { path: 'detail/:id', component: DetailsViewComponent },
  { path: 'editor/:id', component: EditorComponent },
];

@NgModule({
  declarations: [
    DetailsViewComponent,
    EditorComponent,
    ListViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    MatGridListModule,
  ],
  providers: [
    AddressBookService,
    DecimalPipe,
  ]
})
export class AddressBookModule { }
