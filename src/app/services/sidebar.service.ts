import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  onOpened = new EventEmitter<boolean>();
  private opened: boolean = false;

  constructor() { }

  ontoggleSidebar() {
    this.opened = !this.opened;
    this.onOpened.emit(this.opened);
  }
}
