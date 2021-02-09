import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/Services/User/user-service.service';
import { Router } from '@angular/router';
import { PrivilegesService } from '../shared/Services/User/privileges.service';
import { VoitureService } from '../shared/Services/voiture/voiture.service';
import { Voiture } from '../shared/Models/voiture/voiture.model';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { DemPayChequeService } from '../shared/Services/Cheques/dem-pay-cheque.service';
import { DemPayCheque } from '../shared/Models/Cheques/dem-pay-cheque.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  userDetails;
  constructor(private UserService: UserServiceService,
    private router: Router,
    private privilegesService: PrivilegesService,
    private carsService: VoitureService,
    private toastr: ToastrService,
    private demandeService: DemPayChequeService,
  ) {}

  ngOnInit(): void {

   //this.getVoiture();
    this.getUserConnected();
    this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
       
               
      },
      err => {
        console.log(err);
      },
    );
  }


  getUserProfile() {
   return  this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login-page');
  }


  // Get User Connected
  UserIdConnected: string;
  UserNameConnected: string;
  privtestaddTask: boolean = false;
  privtestfinance: boolean = false;
  privtesttransaction: boolean = false;
  privtestTasks: boolean = false;
  sexe: string;
  roleslist: any = [];
  testrole: boolean = false;
  testroledir: boolean = false;
  testroleadmin: boolean = false;
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      this.sexe = res.sexe;
      this.UserService.getUserRoles(this.UserIdConnected).subscribe(res => {
        this.roleslist = res;
        this.roleslist.forEach(item => {
          if (item == "RESPFINANCE") {
            this.testrole = true;
          } else { this.testrole = false; }
          if (item == "DIRECTORG") {
            this.testroledir = true;
          } else {
            this.testroledir = false;
          }

          if (item == "ADMINISTRATEUR") {
            this.testroleadmin = true;
          } else {
            this.testroleadmin = false;
          }

          this.demandeService.Get().subscribe(res => {
            this.dem1 = res
            if (this.testrole == true) {
              this.dem2 = this.dem1.filter(item => item.etatgeneral == "تحت الإجراء" && +item.etatnum < 3);
              this.dem3 = this.dem2.filter(item => item.idparfinancier != this.UserIdConnected || item.idfinancier != this.UserIdConnected || item.idpart != this.UserIdConnected)
              this.nbr = this.dem3.length
            }

            if (this.testroledir == true) {
              this.dem4 = this.dem1.filter(item => item.etatgeneral == "موافقة" && +item.etatnum == 3);
              this.nbd = this.dem4.length;
            }

          
          })
        })

      })
    })
  }


  dem1: DemPayCheque[] = [];
  dem2: DemPayCheque[] = [];
  dem3: DemPayCheque[] = [];
  dem4: DemPayCheque[] = [];
  nbr: number = 0;
  nbd: number = 0;
  getDemPayList() {

  }
  List: Voiture[] = [];
  FList: Voiture[] = [];
  secondDate: Date;
  thirdDate: Date;
  nb: number=0;
 
  /*getVoiture() {
    let i: number = 0;
    this.carsService.Get().subscribe(res => {
      this.List = res;
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date();
      this.List.forEach(item => {

        this.secondDate = new Date(item.dateassurance);
        const diffDays = Math.round(Math.abs((firstDate.getTime() - this.secondDate.getTime()) / oneDay));
        if (diffDays == 11) {
          i = i + 1;
          this.nb = this.nb + 1;
 
        }
        if (diffDays == 30) {
          i = i + 1;
          this.nb = this.nb + 1;

        }


        this.thirdDate = new Date(item.datepermis);

        const diffDays2 = Math.round(Math.abs((firstDate.getTime() - this.thirdDate.getTime()) / oneDay));
        if (diffDays2 == 11) {
          i = i + 1;
          this.nb = this.nb + 1;

        }
        if (diffDays2 == 30) {
          i = i + 1;
          this.nb = this.nb + 1;
       
        }

      })

    })

  }*/

}
