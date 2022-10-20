import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavHeaderComponent } from './nav-header.component';

describe('NavHeaderComponent', () => {
    let component: NavHeaderComponent;
    let fixture: ComponentFixture<NavHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NavHeaderComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NavHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
