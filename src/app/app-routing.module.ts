import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultTaskRoute } from './task-module/task-module-routing.module';
import { TasksRouting } from './task-module/task-module.route.values';

const routes: Routes = [
    { path: '', redirectTo: defaultTaskRoute, pathMatch: 'full' },
    {
        path: TasksRouting.root,
        loadChildren: () => import('./task-module/task-module.module').then(m => m.TaskModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }