import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  private sidebarOpenedSubscription: Subscription;
  public sidebarOpened: boolean = false;

  constructor(private router: Router,
    private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarOpenedSubscription = this.sidebarService.sidebarOpenedSubject.subscribe(
      (state: boolean) => {
        if(state) {
          this.sidebarOpened = true;
        } else {
          this.sidebarOpened = false;
        }
      }
    )
  }

}
