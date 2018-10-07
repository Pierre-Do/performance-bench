import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IsNotAuthenticatedGuard } from '../core/auth/is-not-authenticated.guard';
import { UserModule } from '../core/user/user.module';

import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../shared.module';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    UserModule,
  ],
  providers: [IsNotAuthenticatedGuard],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}