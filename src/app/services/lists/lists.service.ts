import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Lists } from "src/app/models/lists";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private apiURL: string;
  @Output() dataTask: EventEmitter<any> = new EventEmitter();

  constructor(private _http: HttpClient) {
    this.apiURL = environment.serveURL + 'lists';
  }

  //# GET
  public getLists(): Observable<Lists[]> {
    const endpoint = this.apiURL;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get<Lists[]>(endpoint, httpOptions);
  }

  //# POST
  public postList(object: Lists): Observable<Lists> {
    const endpoint = this.apiURL;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.post<Lists>(endpoint, object, httpOptions);
  }

  //# PUT
  public putList(id, object: Lists): Observable<Lists> {
    const endpoint = `${this.apiURL}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.put<Lists>(endpoint, object, httpOptions);
  }


}
