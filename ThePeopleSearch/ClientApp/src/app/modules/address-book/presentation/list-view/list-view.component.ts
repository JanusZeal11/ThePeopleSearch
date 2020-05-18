import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

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
  displayedColumns = ['firstName', 'address', 'interests', 'age', 'details'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addressBookService: AddressBookService,
  ) { }

  ngOnInit() {
    this.addressBookService.getPeople()
      .subscribe(people => {
        console.log('ngOnInit', people);
        this.dataSource = new MatTableDataSource(people);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data: Person, filter: string) => {
          return data.firstName.toLowerCase().includes(filter) ||
                 data.lastName.toLowerCase().includes(filter);
        };
      });
  }

  onDetails(id: number) {
    console.log('onDetails', id);
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }

  onAdd() {
    console.log('onAdd');
    this.router.navigate(['editor', 0], { relativeTo: this.route });
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
