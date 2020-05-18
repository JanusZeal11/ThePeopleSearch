import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AddressBookService } from './address-book.service';

import { Person } from '../models/person.model';
import { environment } from 'src/environments/environment';

describe('AddressBookService', () => {
  let httpMock: HttpTestingController;
  let service: AddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        AddressBookService,
      ]
    });
    service = TestBed.get(AddressBookService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get return an Observable<Person[]>', () => {
    const dummyPeople: Person[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        interests: '',
        age: null,
        imageName: '',
        imageData: '',
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        interests: '',
        age: null,
        imageName: '',
        imageData: '',
      },
    ];

    service.getPeople().subscribe(people => {
      expect(people.length).toBe(2);
      expect(people).toEqual(dummyPeople);
    });

    const req = httpMock.expectOne(`${environment.api_url}/api/People`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPeople);
  });

  it('should get return an Observable<Person>', () => {
    const dummyPerson: Person = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        interests: '',
        age: null,
        imageName: '',
        imageData: '',
      };

    service.getPerson(1).subscribe(person => {
      expect(person).toEqual(dummyPerson);
    });

    const req = httpMock.expectOne(`${environment.api_url}/api/People/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPerson);
  });

  it('should post a new person to add profile', () => {
    const dummyPerson: Person = {
        firstName: 'Sally',
        lastName: 'Doe',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        interests: '',
        age: null,
        imageName: '',
        imageData: '',
      };

    service.addPerson(dummyPerson).subscribe(person => {
        expect(person).toEqual(dummyPerson);
      },
      (error: any) => {}
    );

    const req = httpMock.expectOne(`${environment.api_url}/api/People`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyPerson);
  });

  it('should put a person to update profile', () => {
    const dummyPerson: Person = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        interests: '',
        age: null,
        imageName: '',
        imageData: '',
      };

    service.updatePerson(1, dummyPerson).subscribe(person => {
        expect(person).toEqual(dummyPerson);
      },
      (error: any) => {}
    );

    const req = httpMock.expectOne(`${environment.api_url}/api/People/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyPerson);
  });

  it('should delete a remove person profile', () => {
    const dummyPerson: Person = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        interests: '',
        age: null,
        imageName: '',
        imageData: '',
      };
  
    service.removePerson(1).subscribe(person => {
        expect(person).toEqual(dummyPerson);
      },
      (error: any) => {}
    );
  
    const req = httpMock.expectOne(`${environment.api_url}/api/People/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(dummyPerson);
  });
});
