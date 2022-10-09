import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BackendService} from "./backend.service";
import { RouterTestingModule } from '@angular/router/testing';
import { provideRoutes, Router, RouterModule, Routes } from '@angular/router';
import { defaultTaskRoute } from './task-module/task-module-routing.module';
import { TasksRouting } from './task-module/task-module.route.values';

const routes: Routes = [
    { path: '', redirectTo: defaultTaskRoute, pathMatch: 'full' },
    {
        path: TasksRouting.root,
        loadChildren: () => import('./task-module/task-module.module').then(m => m.TaskModule)
    },
];

describe('AppComponent', () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                RouterModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: BackendService, useValue: new BackendService() },
                provideRoutes(routes),
                {
                    provide: Router, useValue: routerSpy
                }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
        }).compileComponents();
    }));

    it('should create the app', (() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
