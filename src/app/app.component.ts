import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pfa';
  saideBaropen=true;
  
  sideBarToggler() {
    this.saideBaropen = !this.saideBaropen;
  }
}
