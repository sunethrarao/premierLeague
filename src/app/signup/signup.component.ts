import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { DateService } from '../auth/date.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  birthDate;
  registerForm: FormGroup;
  submitted = false;
  private formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  // constructor() {}

  ngOnInit() {
    this.maxDate = new Date();
    this.birthDate = this.maxDate.setFullYear(this.maxDate.getFullYear()- 18);

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthDate:['', Validators.required]
  });

  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

     onSubmit() {
      this.submitted = true;
      // this.birthDate.datePipe.changeDate();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      let data= JSON.parse(localStorage.getItem("plUser"))
      let dataArr=[data]
      dataArr.push(this.registerForm.value)
      localStorage.setItem('plUser',JSON.stringify(dataArr));
      alert('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value));
      this.formSubmitAttempt = true;
      this.router.navigate(['/login']);

    }

}
