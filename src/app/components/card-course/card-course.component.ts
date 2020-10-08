import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-course',
    templateUrl: './card-course.component.html',
    styleUrls: ['./card-course.component.css'],
})
export class CardCourseComponent {

    @Input() imageCard: string;
    @Input() titleCard: string;
    @Input() descriptionCard: string;
    @Input() buttonText: string;
    @Input() buttonHref: string;

}
