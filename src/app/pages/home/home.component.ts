import { Component } from '@angular/core';

import cardData from '../../../assets/json/cards.json';
import listData from '../../../assets/json/list.json';
import teachersData from '../../../assets/json/teachers.json';

interface CardData {
    image: string;
    title: string;
    description: string;
}

interface TeacherData {
    image: string;
    name: string;
    country: string;
    description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public imageHeaderParallax: string = '/assets/images/collapseMain.jpg'
    public imageCategoryParallax: string = '/assets/images/collapseCity.jpg'

    public listCourseCards: CardData[] = cardData;
    public listCourseItems: CardData[] = listData;
    public listTeachersCards: TeacherData[] = teachersData;

    constructor() {

    }

}
