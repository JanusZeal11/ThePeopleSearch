import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatButtonModule, MatCardModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { DetailsViewComponent } from './details-view.component';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../models/person.model';

describe('DetailsViewComponent', () => {
  let component: DetailsViewComponent;
  let fixture: ComponentFixture<DetailsViewComponent>;
  let service: AddressBookService;
  const testPerson: Person = {
    firstName: 'John',
    lastName: 'Doe'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsViewComponent ],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
      ],
      providers: [
        {
          provide: AddressBookService,
          useValue: {
            getPerson: () => of(testPerson),
            removePerson: () => of(testPerson),
          }
        },
      ]
    });

    fixture = TestBed.createComponent(DetailsViewComponent);
    service = TestBed.get(AddressBookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
