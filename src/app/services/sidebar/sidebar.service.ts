import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarOpenedSubject = new Subject();

  constructor() { }

  openSidebar() {
    this.sidebarOpenedSubject.next(true);
  }

  closeSidebar() {
    this.sidebarOpenedSubject.next(false);
  }
}
