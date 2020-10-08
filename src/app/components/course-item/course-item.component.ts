import { Component, Input } from '@angular/core';

@Component({
    selector: 'course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {

    @Input() image: string;
    @Input() title: string;
    @Input() description: string;
    @Input() link: string;

}
