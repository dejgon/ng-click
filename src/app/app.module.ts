import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { scoreReducer } from './store/reducers/score.reducer';
import { allScoreReducer } from './store/reducers/allScore.reducer';
import { multiplierReducer } from './store/reducers/multiplier.reducer';
import { upgradesReducer } from './store/reducers/upgrades.reducer';
import { DataService } from './_services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userStatsIdReducer } from './store/reducers/userStatsId.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      score: scoreReducer,
      allScore: allScoreReducer,
      multiplier: multiplierReducer,
      upgrades: upgradesReducer,
      userStatsId: userStatsIdReducer
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
