import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MailChooserComponent } from '../components/mail-chooser/mail-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MailChooserComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
