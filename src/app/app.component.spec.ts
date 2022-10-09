import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BackendService } from "./backend.service";
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                RouterModule
            ],
            declarations: [
                LayoutComponent,
                AppComponent
            ],
            providers: [
                { provide: BackendService, useValue: new BackendService() },
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
        }).compileComponents();
    }));

    it('should create the app', (() => {
        const layoutFixture = TestBed.createComponent(LayoutComponent);
        const layout = layoutFixture.debugElement.componentInstance;

        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
