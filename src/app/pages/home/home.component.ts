import { Component } from '@angular/core';

import { Card } from '../../model/Card';
import { Teacher } from '../../model/Teacher'

import cardData from '../../../assets/json/cards.json';
import listData from '../../../assets/json/list.json';
import teachersData from '../../../assets/json/teachers.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public imageHeaderParallax: string = '/assets/images/collapseMain.jpg'
    public imageCategoryParallax: string = '/assets/images/collapseCity.jpg'

    public listCourseCards: Card[] = cardData;
    public listCourseItems: Card[] = listData;
    public listTeachersCards: Teacher[] = teachersData;

    constructor() {

    }

}
