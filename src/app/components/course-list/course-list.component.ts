import { Component, Input } from '@angular/core';

interface CourseItem {
    image: string;
    title: string;
    description: string;
}

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {

    @Input() listItemsCourse: CourseItem[];

}
