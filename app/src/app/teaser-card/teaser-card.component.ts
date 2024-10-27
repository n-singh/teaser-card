import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/json/teaserData.json';
import { Article } from '../models/article';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teaser-card',
  standalone: true,
  imports: [DropdownComponent, NgFor],
  templateUrl: './teaser-card.component.html',
  styleUrl: './teaser-card.component.scss'
})

export class TeaserCardComponent implements OnInit {
    public section: string | undefined;
    public article: Array<Article> | undefined;
    public transparentHearts = 0;
    public fontSize = '';
  
    ngOnInit(): void {
        this.section = data.stamp?.section?.title;

        let article: Array<Article> = [data.article];
        this.article = article;

        this.transparentHeartNumberCount()
    }

    transparentHeartNumberCount() {
        const article = this.article?.find(x => x.id);

        if (article) {
            const score = article.rating.score;
            if (score <= 6) {
                this.transparentHearts = 6 - score;
            }
        }
    }

    fontSizeOption(value: string) {
        this.fontSize = value;
    }
}