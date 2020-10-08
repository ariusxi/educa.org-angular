import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'parallax',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.css'],
})
export class ParallaxComponent {

    @Input() imageParallax: string;
    @Input() subtitleParallax: string;

    @ViewChild("parent") children: ElementRef<HTMLElement>;

}
