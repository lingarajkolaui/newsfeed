import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NewsfeedService} from '../service-nw/newsfeed.service';
import {of} from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bbcNews: string;
  breakpoint:number = 6;
  constructor(private http: HttpClientModule, private _apis: NewsfeedService) {}
  ngOnInit() {
    this._apis.getJson('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=872d96bc8d274a4ca582a23d345942e6').subscribe(jsonStr => this.bbcNews = jsonStr, error => this.handleError < string > (error, "Network Error!"));
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }
  private handleError < T > (error: any, result ? : T) {
    console.log("This is getting error:")
    console.log(error);
    return of(result as T);
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}