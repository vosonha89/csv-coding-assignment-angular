import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, BackendService } from '../../backend.service';
import { TasksRouting } from '../task-module.route.values';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    public tasks: Task[] = [];
    constructor(
        private router: Router,
        private backend: BackendService) { }

    public async ngOnInit(): Promise<void> {
        const me = this;
        try {
            me.tasks = await me.backend.tasks().toPromise();
            for (let i = 0; i < me.tasks.length; i++) {
                me.tasks[i].user = await me.backend.user(me.tasks[i].assigneeId).toPromise();
            }
        }
        catch (ex) {
            console.log(ex);
            // can handle error service
        }
    }

    public viewDetail(taskId: number): void {
        const me = this;
        me.router.navigate(['/' + TasksRouting.root + '/' + TasksRouting.detail + '/' + taskId]);
    }
}
