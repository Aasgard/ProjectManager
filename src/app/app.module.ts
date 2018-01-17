import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MailChooserComponent } from '../components/mail-chooser/mail-chooser.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import { ProjectListPageComponent } from '../pages/project-list-page/project-list-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'project-list', component: ProjectListPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MailChooserComponent,
    HomePageComponent,
    ProjectListPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
