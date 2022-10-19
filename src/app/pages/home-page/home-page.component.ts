import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from 'src/app/shared';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, PageHeaderComponent],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
