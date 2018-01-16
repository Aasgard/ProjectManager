import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private selectedEmails: string[] = [];

  constructor() {}

  sendMails() {
    (this.selectedEmails.length > 0) ? console.log('Mails envoyés à ' + this.selectedEmails.length + ' personnes : ' + this.selectedEmails.toString()) : console.log('Veillez à bien sélectionner au moins un email dans la liste');
  }

  handleMailUpdated(mails) {
    this.selectedEmails = mails;
    console.log(this.selectedEmails);
  }
}
