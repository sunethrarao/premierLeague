import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { HeaderComponent } from './header/header.component';
import { ViewTournamentComponent } from './manage-tournament/view-tournament/view-tournament.component';
import { AddTournamentComponent } from './manage-tournament/add-tournament/add-tournament.component';
import { from } from 'rxjs';
import { EditTournamentComponent } from './manage-tournament/edit-tournament/edit-tournament.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/Authguard';
import { AuthService } from './auth/auth.service';
import { EventService } from './event.service';

// import { DateService } from './auth/date.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ManageTournamentComponent,
    HeaderComponent,
    ViewTournamentComponent,
    AddTournamentComponent,
    EditTournamentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, ReactiveFormsModule,
    MaterialModule, Ng2SearchPipeModule,
    FlexLayoutModule, HttpClientModule
    
  ],
 
  providers: [AuthService, AuthGuard, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
