import { Component, OnInit } from '@angular/core';
import { PrivilegesService } from '../shared/Services/User/privileges.service';
import { UserServiceService } from '../shared/Services/User/user-service.service';
import { TacheNotifService } from '../shared/Services/Taches/tache-notif.service';
import { TacheService } from '../shared/Services/Taches/tache.service';
import { TacheNotif } from '../shared/Models/Taches/tache-notif.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private UserService: UserServiceService,
    private notiftaskService: TacheNotifService,
    private TacheService: TacheService) { }

  ngOnInit(): void {
    this.getUserConnected();
  }


  // Get User Connected
  UserIdConnected: string;
  UserNameConnected: string;
  task: TacheNotif[] = [];
  task2: TacheNotif[] = [];
  nb: number;
  roleslist: any = [];
  testrole: boolean = false;
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;

      this.UserService.getUserRoles(this.UserIdConnected).subscribe(res => {
        this.roleslist = res;
        this.roleslist.forEach(item => {
          if (item == "PARTNORMAL" || item == "RESPFINANCE") {
            this.testrole = true;
          }
        })
        console.log(this.testrole)
      })
      this.notiftaskService.ListTache().subscribe(res => {
        this.task = res
        this.task2 = this.task.filter(item => item.idUserAff == this.UserIdConnected && item.nomCreator == "0");
        this.nb = this.task2.length;
      })
    })
  }


}

