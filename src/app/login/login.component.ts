import { Component, OnInit, Input, Output } from "@angular/core";
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import {
  FormControl,
  Validators,
  NgForm,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { first } from "rxjs/operators";
// import { EventEmitter } from 'events';
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value);
      this.formSubmitAttempt = true;
      // this.router.navigate(['/view-tournament']);
    }
  }
}
