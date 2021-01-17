import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StartComponent } from './components/start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'signin',
    component: SignInComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'signup',
    component: SignUpComponent,
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
