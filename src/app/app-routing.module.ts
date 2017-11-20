import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './shared';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [GuardService]
  },    
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
