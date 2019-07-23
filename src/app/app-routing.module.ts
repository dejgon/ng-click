import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  { path: 'game', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'loading', component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
