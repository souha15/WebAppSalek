import { Component, OnInit } from '@angular/core';
import { PrivilegesService } from '../shared/Services/User/privileges.service';
import { UserServiceService } from '../shared/Services/User/user-service.service';
import { TacheNotifService } from '../shared/Services/Taches/tache-notif.service';
import { TacheService } from '../shared/Services/Taches/tache.service';
import { TacheNotif } from '../shared/Models/Taches/tache-notif.model';
import { TransactionService } from '../shared/Services/AdministrativeCommunication/transaction.service';
import { AffectationService } from '../shared/Services/AdministrativeCommunication/affectation.service';
import { Transaction } from '../shared/Models/AdministrativeCommunication/transaction.model';
import { Affectation } from '../shared/Models/AdministrativeCommunication/affectation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private UserService: UserServiceService,
    private notiftaskService: TacheNotifService,
    private TacheService: TacheService,
    private transactionService: TransactionService,
    private affectationService: AffectationService,) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.getTransactionNotif();

  }


  // Get User Connected
  UserIdConnected: string;
  UserNameConnected: string;
  task: TacheNotif[] = [];
  task2: TacheNotif[] = [];
  nb: number;
  roleslist: any = [];
  testrole: boolean = false;
  shownb: boolean = false;
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
        if (this.nb != 0) {
          this.shownb = true
        } else {
          this.shownb = false

        }
      })
    })
  }



 
  Globallist: Transaction[] = [];
  FiltredList2: Transaction[] = [];
  FiltredList: Transaction[] = [];
  ListAffectation: any;
  GlobalAffectationList: Affectation[] = [];
  ListFitredAffec: Affectation[] = [];
  affFiltredTr: Affectation[] = [];
  lastaffFiltredTr: any;
  affectatedTr: Transaction = new Transaction();
  listtr: Transaction[] = [];
  listlist: Affectation[] = [];
  nbtr: number = 0;
  shownbtr: boolean = false;
  getTransactionNotif() {
    let last: any;
    let lastuser: any
    this.FiltredList = [];
    //Transaction List
    this.transactionService.List().subscribe(res => {
      this.Globallist = res
      this.FiltredList = [];
      //Transaction List copie originale et le createur c'es le user connecté

      this.FiltredList2 = this.Globallist


      //List global des affectation

      this.affectationService.List().subscribe(res => {
        this.GlobalAffectationList = res

        // Tester les transactions qui ont des affectations

        this.Globallist.forEach(element => {
          this.affFiltredTr = [];
          last = [];

          this.ListAffectation = this.GlobalAffectationList.filter(item => item.idTransaction == element.id);


          //get the last affected transaction to our user 

          last = this.ListAffectation.map(el => el.idTransaction).lastIndexOf(element.id);

          if (last != -1 && element.etat =="تحت الإجراء") {
            if (this.ListAffectation[last].iduserAffected == this.UserIdConnected) {

              this.transactionService.GetById(this.ListAffectation[last].idTransaction).subscribe(res => {
            
                this.FiltredList.push(res)
                console.log(this.FiltredList)
                this.nbtr = this.FiltredList.length
                if (this.nbtr != 0) {
                  this.shownbtr = true;
                } else { this.shownbtr = false; }
              })
            }
          }
        })

   
      })

    })
  }




}

