import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  someState: any;
  invalidUser: boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.createForm();
    this.store.select(state => state).subscribe((state: any) => {
      this.someState = state?.some;
      debugger
    });
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit() {

  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (!this.loginForm.invalid) {
     let email:any= this.loginForm.get('email')?.value;
     let password:any= this.loginForm.get('password')?.value;
      if(email==this.someState?.email && password == this.someState?.password)
      {
        this.cdr.detectChanges();
        this.router.navigate(['/home']);
      }
      else{
        this.invalidUser=true;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
      }
      this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
  }

  register()
  {
    this.router.navigate(['']);
  }

}

