import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from 'src/app/shared/presentation/confirm-dialog/confirm-dialog.component';

import { Person } from '../../models/person.model';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  profile: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private addressService: AddressBookService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.addressService
        .getPerson(params['id'])
        .subscribe(person => this.profile = person);
    });
  }

  onEdit() {
    this.router.navigate(['../../editor', this.profile.id], {relativeTo: this.route});
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {fullName: `${this.profile.firstName} ${this.profile.lastName}`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addressService.removePerson(this.profile.id)
          .subscribe(() => this.router.navigate(['/']) );
      }
    });
  }

  formatImage(fileData: string) {
    return `data:image/gif;base64,${fileData}`;
  }
}
