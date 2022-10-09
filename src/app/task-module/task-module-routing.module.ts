import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRouting } from './task-module.route.values';

export const defaultTaskRoute = '/' + TasksRouting.root + '/' + TasksRouting.list;
const routes: Routes = [
    {
        path: TasksRouting.root,
        component: LayoutComponent,
        children: [
            {
                path: TasksRouting.list,
                component: TaskListComponent
            },
            {
                path: TasksRouting.detail + '/:id',
                component: TaskDetailComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskModuleRoutingModule { }

