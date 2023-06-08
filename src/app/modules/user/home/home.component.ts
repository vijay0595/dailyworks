import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetState, someAction } from 'src/app/store/some.actions';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  someState: any;
  invalidUser: boolean=false;
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.store.select(state => state).subscribe((state: any) => {
      this.someState = state?.some;
      debugger
    });
  }
  ngOnInit() {

  }
  logout()
  {
    this.store.dispatch(resetState());
    this.router.navigate(['/login']);
  }
}

