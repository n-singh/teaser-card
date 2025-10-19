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
    public maxScore = 6;
    public fontSize = '';
  
    ngOnInit(): void {
        this.section = data.stamp?.section?.title;

        let article: Array<Article> = [data.article];
        this.article = article;

        this.getHeartStatus();
    }

    getHeartStatus() {
        const article = this.article?.find(x => x.id);
        if (!article) return { filledHearts: 0, transparentHearts: this.maxScore };

        const score = article.rating.score;
        const filledHearts = Math.min(score, this.maxScore);
        const transparentHearts = Math.max(this.maxScore - score, 0);

        return { filledHearts, transparentHearts };
    }

    fontSizeOption(value: string) {
        this.fontSize = value;
    }
}