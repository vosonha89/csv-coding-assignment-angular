import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskModuleRoutingModule } from './task-module-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        TaskListComponent,
        TaskDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TaskModuleRoutingModule
    ]
})
export class TaskModule { }
