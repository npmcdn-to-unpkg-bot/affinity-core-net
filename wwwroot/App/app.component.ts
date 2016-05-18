import {Component,OnInit} from '@angular/core'; 
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from '@angular/router';

import {Home} from './app.home'
import {Dashboard} from './dashboard.component'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'ng2-views/app.component.html'
})
@Routes([ 
  {path: '/home', component: Home},
  {path: '/dashboard',component: Dashboard}
])
export class AppComponent implements OnInit { 
    constructor(private router: Router){
        
    }
    
    ngOnInit() {
    this.router.navigate(['/home']);
    } 
}