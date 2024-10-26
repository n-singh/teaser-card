import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaserCardComponent } from './teaser-card/teaser-card.component';

export const routes: Routes = [
    {
      path: '',
      component: TeaserCardComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
