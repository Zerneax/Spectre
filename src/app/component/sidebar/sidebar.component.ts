import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isFocusInsideComponent = false;
  isComponentClicked = false;
  test: string = "";

  constructor(private eRef: ElementRef,
    private sidebarService: SidebarService) {}

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if("btn-menu" != event.target.id) {
      if(!this.eRef.nativeElement.contains(event.target)) {
        this.sidebarService.closeSidebar();
      }
    }

  }

  close() {
    this.sidebarService.closeSidebar();
  }


}
