import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nav-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
