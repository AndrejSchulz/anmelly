import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../rapidapi.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  genreList;
  movieList;

  constructor(private apiService: RapidApiService) { }

  ngOnInit(): void {
    this.apiService.getMovie().subscribe((data)=>{
      console.log(data);
      this.movieList = data["result"];
      console.log(this.movieList);
    });
    this.apiService.getGenre().subscribe((data)=>{
      console.log(data);
      this.genreList = data;
      console.log(this.genreList);
    });
  }

}
