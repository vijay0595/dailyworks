import {Routes } from '@angular/router';
import { UserComponent } from './modules/user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
        {
            path: '',
            loadChildren: () =>
                import(
                    '../app/modules/user/user.module'
                ).then((m) => m.UserModule),
        },
    ],
},
];
