import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';

// Firebase + AngularFire

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

// firebaseconfig

import {environment} from '../environments/environment';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {SignupPageComponent} from './components/signup-page/signup-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

// Routes

import {appRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.config),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
