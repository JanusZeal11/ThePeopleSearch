import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource: MatTableDataSource<Person>;
  displayedColumns = ['firstName', 'address', 'interests', 'age'];

  constructor(
    private addressBookService: AddressBookService,
  ) { }

  ngOnInit() {
    this.addressBookService.getPeople()
      .subscribe(people => {
        this.dataSource = new MatTableDataSource(people);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data: Person, filter: string) => {
          return data.firstName.toLowerCase().includes(filter) ||
                 data.lastName.toLowerCase().includes(filter);
        };
      });
  }

  formatImage(fileData: string) {
    return `data:image/gif;base64,${fileData}`;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
