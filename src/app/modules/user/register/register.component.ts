import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { someAction } from 'src/app/store/some.actions';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  someState: any;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit() {

  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  submitForm() {

    this.submitted = true;
    if (!this.registerForm.invalid) {
      let data: any = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      }
      this.store.dispatch(someAction({ payload: data }));
      this.router.navigate(['/login']);
    }
  }

}
