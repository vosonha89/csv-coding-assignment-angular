import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { TaskModule } from './task-module/task-module.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,
        TaskModule
    ],
    providers: [
        BackendService
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule {

}
