import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task, BackendService, User } from '../../backend.service';
import { TasksRouting } from '../task-module.route.values';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
    public task?: Task;
    public users?: User[];
    public message = '';
    public updateSuccessed = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private backendService: BackendService) { }

    public async ngOnInit(): Promise<void> {
        const me = this;
        me.message = '';
        me.updateSuccessed = false;
        me.route.params.subscribe(async params => {
            const id = params['id'] as number;
            if (id) {
                me.task = await me.backendService.task(id).toPromise();
            }
        });
        me.users = await me.backendService.users().toPromise()
    }

    public async save(): Promise<void> {
        const me = this;
        me.message = '';
        me.updateSuccessed = false;
        try {
            const updatedTask = await me.backendService.update(me.task.id, me.task).toPromise();
            if (updatedTask) {
                me.message = 'Update success';
                me.updateSuccessed = true;
                me.task = updatedTask;
            }
            else {
                me.message = 'Cannot update data';
            }
        }
        catch (ex) {
            // handle error service
            me.message = 'Cannot update data';
        }
    }

    public cancel(): void {
        const me = this;
        me.router.navigate(['/' + TasksRouting.root + '/' + TasksRouting.list]);
    }
}
