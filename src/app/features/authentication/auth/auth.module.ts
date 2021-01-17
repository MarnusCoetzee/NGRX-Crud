import { AngularMaterialModule } from './../../shared/modules/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StartComponent } from './components/start/start.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AuthComponent,
    StartComponent,
    SignInComponent,
    SignUpComponent,
    TermsOfServiceComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
