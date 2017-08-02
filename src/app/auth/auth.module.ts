import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations: [
	  SigninComponent,
	  SignupComponent
	],
	imports: [
	  FormsModule,
	  AuthRoutingModule
	]
})

export class AuthModule {}