import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { EditorComponent } from './editor.component';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../models/person.model';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;
  let service: AddressBookService;
  const testPerson: Person = {
    firstName: 'John',
    lastName: 'Doe',
    interests: 'Unit Testing,Debugging',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent ],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatInputModule,
      ],
      providers: [
        {
          provide: AddressBookService,
          useValue: {
            getPerson: () => of(testPerson),
            addPerson: () => of(testPerson),
            updatePerson: () => of(testPerson),
          }
        }
      ]
    });
    fixture = TestBed.createComponent(EditorComponent);
    service = TestBed.get(AddressBookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
