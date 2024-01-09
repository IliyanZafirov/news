import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../Article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent  {
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.articleService.getAllArticles().subscribe(data => {
      this.articles = data;
    });
  }
}
