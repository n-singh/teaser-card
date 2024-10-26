import { Component, EventEmitter, Output } from '@angular/core';
import * as data from '../../assets/json/config.json';
import { TeaserOptions } from '../models/teaserOptions';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})

export class DropdownComponent {
  public title: string | undefined;
  public teaserOptions: Array<TeaserOptions> | undefined;
  @Output() fontSizeOption = new EventEmitter<string>();

  ngOnInit(): void {
    this.teaserOptions = data.teaserOptions;
  }

  onChange(value: any) { 
    this.fontSizeOption.emit(value.target.value);
  } 
}
