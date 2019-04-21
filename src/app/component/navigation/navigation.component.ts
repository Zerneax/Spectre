import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,
    private sidebarService: SidebarService) { }

  ngOnInit() {

  }

  test() {
    window.scrollTo(0,0);
  }

  openSidebar() {
    this.sidebarService.openSidebar();
  }
}
