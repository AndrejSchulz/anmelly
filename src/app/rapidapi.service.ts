import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RapidApiService {
  API_URL='https://unogsng.p.rapidapi.com/genres';
  API_KEY = '151e2ef9c0214fa5812099c8a8d8d959';
  OPTIONS = {
    headers: {
      'x-rapidapi-key': '8ce68ed8b7msh278e512fe5c90fep1f9dffjsnc50def1f3a7e',
      'x-rapidapi-host': 'unogsng.p.rapidapi.com',
    }
  };
  genreList;

  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  getMovie(){
    return this.httpClient.request('GET','https://unogsng.p.rapidapi.com/genres',this.OPTIONS);
  }
  getGenre(){
    const promise = this.httpClient.request('GET',this.API_URL,this.OPTIONS).toPromise();
      promise.then((res) =>{
        this.genreList = res["result"]
        console.log ("Promise accepted");
        console.log(this.genreList);

    }).catch((error)=>{
      this.genreList = error["result"]
      console.log ("Promise rejected ");
    });
    return this.genreList;
    }

}