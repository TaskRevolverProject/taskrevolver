// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserService } from './services/user/user.service';
import { MaterialModule } from './modules/material.module';

// Services
import { FootercontentService } from './services/footercontent/footercontent.service';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TacComponent } from './components/tac/tac.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footergroup1Component } from './components/footer/footergroup1/footergroup1.component';
import { Footergroup2Component } from './components/footer/footergroup2/footergroup2.component';
import { Footergroup3Component } from './components/footer/footergroup3/footergroup3.component';
import { FootercontentComponent } from './components/footer/footercontent/footercontent.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamlistComponent } from './components/teams/teamlist/teamlist.component';
import { TeamComponent } from './components/teams/team/team.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { ThemesComponent } from './components/themes/themes.component';
import { RolesComponent } from './components/roles/roles.component';
import { RanksComponent } from './components/ranks/ranks.component';
import { RevolversComponent } from './components/revolvers/revolvers.component';
import { RevolverslotsComponent } from './components/revolverslots/revolverslots.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasktypesComponent } from './components/tasktypes/tasktypes.component';
import { TaskcategoriesComponent } from './components/taskcategories/taskcategories.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBTKLdH1cGYtg1aMY4S_ZeDT_TFJvaoGbM',
  authDomain: 'taskrevolver.firebaseapp.com',
  databaseURL: 'https://taskrevolver.firebaseio.com',
  storageBucket: 'taskrevolver.appspot.com',
  messagingSenderId: '1003943567678'
};

const routes: Routes = [
// basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tac', component: TacComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'admin/teams', component: TeamsComponent },
  { path: 'admin/users', component: UsertableComponent },
  { path: 'admin/roles', component: RolesComponent },
  { path: 'admin/themes', component: ThemesComponent },
  { path: 'admin/ranks', component: RanksComponent },
  { path: 'admin/tasks', component: TasksComponent },
  { path: 'admin/taskcategories', component: TaskcategoriesComponent },
  { path: 'admin/tasktypes', component: TasktypesComponent },
  { path: 'admin/revolvers', component: RevolversComponent },
  { path: 'admin/revolverslots', component: RevolverslotsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TacComponent,
    PrivacyComponent,
    FooterComponent,
    Footergroup1Component,
    Footergroup2Component,
    Footergroup3Component,
    FootercontentComponent,
    TeamsComponent,
    TeamlistComponent,
    TeamComponent,
    UserregisterComponent,
    UserloginComponent,
    UsertableComponent,
    ThemesComponent,
    RolesComponent,
    RanksComponent,
    TasksComponent,
    TaskcategoriesComponent,
    TasktypesComponent,
    RevolversComponent,
    RevolverslotsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MaterialModule
  ],

  providers: [FootercontentService, AngularFireAuth, UserService],
  bootstrap: [AppComponent],
  entryComponents: [UserloginComponent, UserregisterComponent]
})
export class AppModule { }
