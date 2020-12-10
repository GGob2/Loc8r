import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {HistoryService} from '../history.service';
import { User } from '../user';
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService,
              private historyService : HistoryService) { }

  ngOnInit() {
  }

  public doLogout(): void {
    // console.log(this.authenticationService.logout());
    this.authenticationService.logout();
  }

  public isLoggedIn(): boolean {
    // console.log(this.authenticationService.isLoggedIn());    -->   계속해서 false 리턴 
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.name : 'Guest';
  }

}
