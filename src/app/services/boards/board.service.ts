import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Board } from '../../models/board';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  private apiURL: string;

  constructor(private _http: HttpClient) {
    // this.apiURL = environment.apiURL+ 'boards';
    this.apiURL = environment.serveURL + 'boards';
  }

  public getBoard(): Observable<Board[]> {
    const endpoint = this.apiURL;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<Board[]>(endpoint, httpOptions);
  }


}
