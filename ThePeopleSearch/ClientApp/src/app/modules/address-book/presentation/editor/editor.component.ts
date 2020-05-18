import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatChipInputEvent } from '@angular/material';

import { Person } from '../../models/person.model';
import { AddressBookService } from '../../services/address-book.service';
import { FormBuilder, Validators } from '@angular/forms';

export interface Interest {
  name: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  readonly chipsSeparatorKeysCodes: number[] = [ENTER, COMMA];
  chipsVisible = true;
  chipsSelectable = true;
  chipsRemovable = true;
  chipsAddOnBlur = true;
  chipsInterests: Interest[] = [];

  profile: Person;
  newProfile = true;
  title = "Add Profile";
  submit = "CREATE"

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: [''],
    city: [''],
    state: [''],
    zip: ['', Validators.maxLength(5)],
    age: [''],
  });;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private addressService: AddressBookService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != 0) {
        this.title = "Edit Profile";
        this.submit = "UPDATE";
        this.newProfile = false;
        this.addressService
        .getPerson(params['id'])
        .subscribe(person => {
          this.profile = person;
          this.updateForm();
          this.chipsInterests = this.profile.interests
            .split(',')
            .map (i => {
              return {name: i}
            });
        });
      } else {
        this.profile = null;
      }
    });
  }

  updateForm() {
    this.form.setValue({
      firstName: this.profile.firstName ? this.profile.firstName : '',
      lastName: this.profile.lastName ? this.profile.lastName : '',
      address: this.profile.address ? this.profile.address : '',
      city: this.profile.city ? this.profile.city : '',
      state: this.profile.state ? this.profile.state : '',
      zip: this.profile.postalCode ? this.profile.postalCode : '',
      age: this.profile.age ? this.profile.age : ''});
    this.form.updateValueAndValidity();
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.profile) {
      this.onUpdate();
    } else {
      this.onCreate();
    }
  }

  onUpdate() {
    if (this.form.valid) {
      let newPerson: Person = {
        id: this.profile.id,
        firstName: this.form.controls.firstName.value,
        lastName: this.form.controls.lastName.value,
        address: this.form.controls.address.value,
        city: this.form.controls.city.value,
        state: this.form.controls.state.value,
        postalCode: this.form.controls.zip.value,
        age: Number(this.form.controls.age.value),
        interests: this.chipsInterests.map(i => i.name).join(','),
        // imageName = '', // TODO: Handle upload images
        // imageData = '', // TODO: Handle upload images
      };

      this.addressService.updatePerson(this.profile.id, newPerson)
        .subscribe(result => {
          this.router.navigate(['../../detail', this.profile.id], {relativeTo: this.route});
        });
    }
  }

  onCreate() {
    if (this.form.valid && this.form.dirty) {
      let newPerson: Person = {
        firstName: this.form.controls.firstName.value,
        lastName: this.form.controls.lastName.value,
        address: this.form.controls.address.value,
        city: this.form.controls.city.value,
        state: this.form.controls.state.value,
        postalCode: this.form.controls.zip.value,
        age: Number(this.form.controls.age.value),
        interests: this.chipsInterests.map(i => i.name).join(','),
        // imageName = '', // TODO: Handle upload images
        // imageData = '', // TODO: Handle upload images
      };

      this.addressService.addPerson(newPerson)
        .subscribe(result => {
          this.router.navigate(['/']);
        });
    }
  }

  chipsAdd(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chipsInterests.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  chipsRemove(interest: Interest) {
    const index = this.chipsInterests.indexOf(interest);

    if (index >= 0) {
      this.chipsInterests.splice(index, 1);
    }
  }

}
