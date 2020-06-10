import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

import { Employee, Service } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service],
    preserveWhitespaces: true
})
export class AppComponent {
    employees: Employee[];
    allowSearch: boolean;
    columnChooserModes: any;

    constructor(service: Service) {
        this.employees = service.getEmployees();
        this.allowSearch = true;
        this.columnChooserModes = [{
            key: "dragAndDrop",
            name: "Drag and drop"
        }, {
            key: "select",
            name: "Select"
        }];
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxTreeListModule,
        DxSelectBoxModule,
        DxCheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);