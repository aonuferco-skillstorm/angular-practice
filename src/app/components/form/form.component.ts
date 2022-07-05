import { FormService } from 'src/app/services/form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  morbNews = '../../assets/morbfull.png';
  profileForm = this.fb.group({
    firstName: '',
    lastName: '',
    phone: '',
    email: this.fb.array([
      this.fb.control('')
    ]),
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  get email() {
    return this.profileForm.get('email') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router, private formService: FormService) { }

  ngOnInit(): void {
  }

  addEmail() {
    this.email.push(this.fb.control(''));
  }

  onSubmit(): void {
    this.formService.create(this.profileForm.getRawValue())
      .subscribe({
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
      });
    this.router.navigate(['/']);

  }

}
