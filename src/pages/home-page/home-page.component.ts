import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService } from '../../providers/documents/documents.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private documents: Document[] = [];

  constructor(
    private router: Router,
    private documentsService: DocumentsService
  ) { }

  ngOnInit() {
    this.documentsService.getDocuments().subscribe((data: Document[]) => {
      if (data.length > 0) {
        data.forEach(document => {
          this.documents.push(document);
        });
      }
    });
  }

}
