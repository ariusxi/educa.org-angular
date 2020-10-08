import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-teacher',
    templateUrl: './card-teacher.component.html',
    styleUrls: ['./card-teacher.component.css']
})
export class CardTeacherComponent {

    @Input() imageTeacher: string;
    @Input() nameTeacher: string;
    @Input() descriptionTeacher: string;
    @Input() countryTeacher: string;

    constructor() {

    }

}
