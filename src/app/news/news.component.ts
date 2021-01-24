import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../rapidapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent  implements OnInit {
  articles;

  constructor(private apiService: RapidApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
      console.log(this.articles);
    });
  }

}
