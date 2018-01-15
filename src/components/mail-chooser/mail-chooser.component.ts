import { Component, OnInit } from '@angular/core';

const EMAILS = ['francois.regis.lancien@gmail.com', 'alexia.jouvancelebail@gmail.com', 'ln56@hotmail.fr', 'fran.kerh@live.fr'];

@Component({
  selector: 'mail-chooser',
  templateUrl: './mail-chooser.component.html',
  styleUrls: ['./mail-chooser.component.scss']
})

export class MailChooserComponent implements OnInit {

  private emails: string[] = EMAILS;
  private selectedEmails: string[] = [];

  constructor() {}

  ngOnInit() {
    if (this.emails.length > 0) {
      this.selectedEmails.push(this.emails[0]);
    }
  }

  public mailToggle($event) {
    if ($event.target.checked && this.selectedEmails.indexOf($event.target.name) === -1) {
      this.selectedEmails.push($event.target.name);
    } else {
      this.selectedEmails = this.selectedEmails.filter(mail => mail !== $event.target.name);
    }
    console.log(this.selectedEmails);
  }
}
