import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  constructor(private _http: HttpClient) {}
  getJson(url): Observable<string> {
    return this._http.get(url)
      .pipe(
      map((res: any) => {
        console.log("Data got: ");
        console.log(res);
        return res;
      })
      //,
      //catchError(error => this.handleError<string>(error, "Network Error!"))
    );
  }
}
 
