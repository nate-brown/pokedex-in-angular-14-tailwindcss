import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from 'src/app/shared';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [CommonModule, PageHeaderComponent],
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
