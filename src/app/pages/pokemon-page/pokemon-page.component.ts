import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
    selector: 'app-pokemon-page',
    standalone: true,
    imports: [CommonModule, PageHeaderComponent],
    templateUrl: './pokemon-page.component.html',
    styleUrls: ['./pokemon-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
