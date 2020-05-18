import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatPaginatorModule, MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { ListViewComponent } from './list-view.component';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../models/person.model';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let service: AddressBookService;
  const testPerson: Person = {
    firstName: 'John',
    lastName: 'Doe',
    interests: 'Unit Testing,Debugging',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatIconModule,
        MatInputModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: AddressBookService,
          useValue: { getPeople: () => of([testPerson]) }
        },
      ]
    });
    fixture = TestBed.createComponent(ListViewComponent);
    service = TestBed.get(AddressBookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
