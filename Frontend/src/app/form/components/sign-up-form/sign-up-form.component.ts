import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      faculty: ['', Validators.required],
      yearOfStudy: ['', Validators.required],
      aboutText: ['', Validators.required],
      chosenDepts: ['', Validators.required],
      hoursPerWeek: ['', Validators.required]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signUpForm.value);
  }
}
