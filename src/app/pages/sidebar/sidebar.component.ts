import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @HostListener('document:click', ['$event'])
    clickout(event) {
      if(this.eRef.nativeElement.contains(event.target)) {
        alert("inside");
      } else {
        alert("outside");
      }
    }

    constructor(private eRef: ElementRef) {}

  ngOnInit() {
  }

}
