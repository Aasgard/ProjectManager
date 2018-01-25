import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DocumentsService {

  constructor(
    private http: HttpClient
  ) {}

  public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>('http://localhost:3000/data');
  }

}
