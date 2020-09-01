import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherify';
  _opened: boolean = false;

  constructor(private sidebarService: SidebarService) {
   this.sidebarService.onOpened.subscribe((opened) => {
     this._opened = opened;
   });
  }
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
