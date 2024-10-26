import { Component, Input, OnInit } from '@angular/core';
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
    public title: string | undefined;
    public articles: Array<Article> | undefined;
    public transparentHearts = 0;
    public fontSize = '';
  
    ngOnInit(): void {
        this.title = data.stamp?.section?.title;
        this.articles = [data.article];

        this.heartNumberCount()
    }

    heartNumberCount() {
        const item = this.articles?.find(x => x);
        if (item) {
            const score = item.rating.score;
            if (score <= 6) {
                this.transparentHearts = 6 - score;
            }
        }
    }

    fontSizeOption(value: any) {
        this.fontSize = value;
    }
}