import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StarterHeaderComponent } from './layout/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './layout/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './layout/starter-content/starter-content.component';
import { StarterFooterComponent } from './layout/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './layout/starter-control-sidebar/starter-control-sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AlertComponent, AlertService } from './_directives/index';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
