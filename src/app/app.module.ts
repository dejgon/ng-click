import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';

import { actualUpgradesReducer } from './store/reducers/actualUpgrades.reducer';
import { upgradesReducer } from './store/reducers/upgrades.reducer';
import { DataService } from './_services/data.service';

import { UpgradesEffects } from './store/effects/upgrades.effect';
import { AuthGuard } from './_guards/auth.guard';
import { statisticReducer } from './store/reducers/statistic.reducer';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([UpgradesEffects]),
    StoreModule.forRoot({
      upgrades: upgradesReducer,
      actualUpgrades: actualUpgradesReducer,
      statistic: statisticReducer,
    })
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
