import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

    public hrefEmail: string;
    public hrefCellphone: string;

    @Input() textCopyright: string;
    @Input() textEmail: string;
    @Input() textCellphone: string;

    ngOnInit() {
        this.hrefEmail = `mailto:${this.textEmail}`;
        this.hrefCellphone = `tel:${this.hrefCellphone}`;
    }

}
