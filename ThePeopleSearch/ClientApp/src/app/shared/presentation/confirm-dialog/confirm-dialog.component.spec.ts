import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatDialogModule, MatButtonModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogComponent ],
      imports: [
        NoopAnimationsModule,
        MatDialogModule,        
        MatButtonModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {fullName: 'John Doe'} }
      ]
    });
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
