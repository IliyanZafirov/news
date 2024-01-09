import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:8080/api/v1/articles/';
  constructor(private http: HttpClient) { }

  // getArticleById(articleId: number): Observable<Article> {
  //   const url = `$(this.apiUrl)/$(articleId)`;
  //   return this.http.get<Article>(url);
  // }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }
}
