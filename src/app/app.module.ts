import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { scoreReducer } from './store/reducers/score.reducer';
import { allScoreReducer } from './store/reducers/allScore.reducer';
import { multiplierReducer } from './store/reducers/multiplier.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      score: scoreReducer,
      allScore: allScoreReducer,
      multiplier: multiplierReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
