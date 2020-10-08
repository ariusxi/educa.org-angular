import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css'],
})
export class IconComponent {

    @Input() iconType: string;

}
