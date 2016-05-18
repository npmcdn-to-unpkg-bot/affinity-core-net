import {Component} from '@angular/core';
import {AppMenu} from './app.menu'

@Component({
    selector: 'my-app',
    directives: [AppMenu],
    template: '<h1>My First Angular 2 App Exemplo <my-menu></my-menu></h1>'
})
export class AppComponent { }