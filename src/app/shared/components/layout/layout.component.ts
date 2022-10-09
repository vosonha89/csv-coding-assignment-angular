import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksRouting } from '../../../task-module/task-module.route.values';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    constructor(private router: Router) { }

    public ngOnInit(): void {
    }

    public gotoTaskList(): void {
        const me = this;
        me.router.navigate(['/' + TasksRouting.root + '/' + TasksRouting.list]);
    }
}
