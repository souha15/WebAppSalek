import { Component, OnInit } from '@angular/core';
import { DemPayChequeService } from '../../../shared/Services/Cheques/dem-pay-cheque.service';
import { ArticlePayChequeService } from '../../../shared/Services/Cheques/article-pay-cheque.service';
import { TbListeningService } from '../../../shared/Services/Evenements/tb-listening.service';
import { ListeningProjetService } from '../../../shared/Services/Projets/listening-projet.service';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { DemPayCheque } from '../../../shared/Models/Cheques/dem-pay-cheque.model';
import { ArticlePayCheque } from '../../../shared/Models/Cheques/article-pay-cheque.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheque-pay-list-pay',
  templateUrl: './cheque-pay-list-pay.component.html',
  styleUrls: ['./cheque-pay-list-pay.component.css']
})
export class ChequePayListPayComponent implements OnInit {
  userDetails;

  constructor(private demandeService: DemPayChequeService,
    private articleService: ArticlePayChequeService,
    private tbLService: TbListeningService,
    private tbLProjetService: ListeningProjetService,
    private UserService: UserServiceService,
    private router: Router,
    private toastr: ToastrService,) { }

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
    this.getUserConnected();
    this.getDemPayList();
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
  p: Number = 1;
  count: Number = 5;
  UserIdConnected: string;
  UserNameConnected: string;



  // Get User Connected
  privtestaddTask: boolean = false;
  privtestfinance: boolean = false;
  privtesttransaction: boolean = false;
  privtestTasks: boolean = false;
  sexe: string;
  roleslist: any = [];
  testrole: boolean = false;
  testroledir: boolean = false;
  testroleadmin: boolean = false;
  dem1: DemPayCheque[] = [];
  demg1: DemPayCheque[] = [];
  demg2: DemPayCheque[] = [];
  dem2: DemPayCheque[] = [];
  dem3: DemPayCheque[] = [];
  dem4: DemPayCheque[] = [];
  nbr: number = 0;
  nbd: number = 0;
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
              this.dem3 = this.dem2.filter(item => item.idparfinancier != this.UserIdConnected && item.idfinancier != this.UserIdConnected && item.idpart != this.UserIdConnected)
              this.demg1 = this.dem2.filter(item => +item.etatnum < 3);
              this.demg2 = this.dem1.filter(item => item.attribut5 == this.UserIdConnected && item.attribut3=="editer");

              this.nbr = this.demg1.length + this.demg2.length
              
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



  //Get Dem pay ListProject
  dem5: DemPayCheque[] = [];
  dem6: DemPayCheque[] = [];
  arlis: ArticlePayCheque[] = [];
  arlis2: ArticlePayCheque[] = [];
  getDemPayList() {
    this.demandeService.Get().subscribe(res => {
      this.dem5 = res
      this.dem6 = this.dem5.filter(item => +item.etatnum <= 3 ||  item.attribut5 == this.UserIdConnected)

    })
  }


  //PopulateForm
  per: DemPayCheque = new DemPayCheque();
  raistest: boolean=false

  populateForm(conge: DemPayCheque) {
    this.per = Object.assign({}, conge)
    this.articleService.Get().subscribe(res => {
      this.arlis2 = res;
      this.arlis = this.arlis2.filter(item => item.idDem == this.per.id)
      if (this.per.attibut1 != null) {
        this.raistest = true;
      } else {
        this.raistest =false
      }
    })
  }

  etat: string;
  ret: boolean = false;
  dec: boolean = false;
  etattest(event) {
    this.etat = event.target.value;
    if (this.etat == "إعادة") {
      this.ret = true;
    } else { this.ret = false; }
    if (this.etat == "رفض") {
      this.dec = true;
    } else {
      this.dec = false;
    }
  }

  date = new Date().toLocaleDateString();
  accept() {
    if (this.per.etatnum == "0" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datefinancier = this.date;
      this.per.etatfinacier = "موافقة"
      this.per.nomfinancier = this.UserNameConnected;
      this.per.idfinancier = this.UserIdConnected;
      this.per.etatnum = "1";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()
        this.getDemPayList();
      })
    }
    else if (this.per.etatnum == "1" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datepart = this.date;
      this.per.etatpart = "موافقة"
      this.per.nompart = this.UserNameConnected;
      this.per.idpart = this.UserIdConnected;
      this.per.etatnum = "2";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()
        this.getDemPayList();
      })
    }

    else if (this.per.etatnum == "2" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.dateparfinancier = this.date;
      this.per.etatparfinancier = "موافقة"
      this.per.nomparfinancier = this.UserNameConnected;
      this.per.idparfinancier = this.UserIdConnected;
      this.per.etatnum = "3";
      this.per.etatgeneral = "موافقة"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()
        this.getDemPayList();
      })
    } else   if (this.per.attribut5 == this.UserIdConnected && this.per.attribut3 == "editer") {
      this.per.etatparfinancier = "موافقة"
      this.per.etatgeneral = "موافقة"
      this.per.attribut5 = ""
      this.per.attribut3 = ""
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()
        this.getDemPayList();
      })
    }

    else {// if (this.per.idfinancier == this.UserIdConnected || this.per.idparfinancier == this.UserIdConnected || this.per.idpart == this.UserIdConnected) {
      this.toastr.warning('لقد قمت بالموافقة ', 'فشل');


    }


    
  }


  getnotfinished(event) {
    this.per.attibut1 = event.target.value;
  }

  refuse() {
    if (this.per.etatnum == "0" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datefinancier = this.date;
      this.per.etatfinacier = "مرفوضة"
      this.per.nomfinancier = this.UserNameConnected;
      this.per.idfinancier = this.UserIdConnected;
      this.per.etatnum = "1";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()
        this.getDemPayList();
      })
    }
    else if (this.per.etatnum == "1" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datepart = this.date;
      this.per.etatpart = "مرفوضة"
      this.per.nompart = this.UserNameConnected;
      this.per.idpart = this.UserIdConnected;
      this.per.etatnum = "2";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()
        this.getDemPayList();
      })
    }

    else if (this.per.etatnum == "2" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.dateparfinancier = this.date;
      this.per.etatparfinancier = "مرفوضة"
      this.per.nomparfinancier = this.UserNameConnected;
      this.per.idparfinancier = this.UserIdConnected;
      this.per.etatnum = "3";
      this.per.etatgeneral = "مرفوضة"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()

        this.getDemPayList();
      })
    }

    else if (this.per.attribut5 == this.UserIdConnected && this.per.attribut3 == "editer") {
      this.per.etatparfinancier = "مرفوضة"
      this.per.etatgeneral = "مرفوضة"
      this.per.attribut5 = ""
      this.per.attribut3 = ""
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()

        this.getDemPayList();
      })
    }
    else {// if (this.per.idfinancier == this.UserIdConnected || this.per.idparfinancier == this.UserIdConnected || this.per.idpart == this.UserIdConnected) {
      this.toastr.warning('لقد قمت بالموافقة ', 'فشل');


    }


  }


  retour() {
    if (this.per.etatnum == "0" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datefinancier = this.date;
      this.per.etatfinacier = "للإنجاز"
      this.per.nomfinancier = this.UserNameConnected;
      this.per.idfinancier = this.UserIdConnected;
      this.per.etatnum = "1";
      this.per.etatgeneral = "للإنجاز"
      this.per.attribut5 = this.UserIdConnected;
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()

        this.getDemPayList();
      })
    }else if (this.per.etatnum == "1" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datepart = this.date;
      this.per.etatpart = "للإنجاز"
      this.per.nompart = this.UserNameConnected;
      this.per.idpart = this.UserIdConnected;
      this.per.attribut5 = this.UserIdConnected;
      this.per.etatnum = "2";
      this.per.etatgeneral = "للإنجاز"

      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()

        this.getDemPayList();
      })
    }

   else if (this.per.etatnum == "2" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.dateparfinancier = this.date;
      this.per.etatparfinancier = "للإنجاز"
      this.per.nomparfinancier = this.UserNameConnected;
      this.per.idparfinancier = this.UserIdConnected;
      this.per.attribut5 = this.UserIdConnected;
      this.per.etatnum = "3";
      this.per.etatgeneral = "للإنجاز"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()

        this.getDemPayList();
      })
    } else if (this.per.attribut5 == this.UserIdConnected && this.per.attribut3 == "editer") {
      this.per.etatparfinancier = "للإنجاز"
      this.per.etatgeneral = "للإنجاز"
      this.per.attribut5 = ""
      this.per.attribut3 = ""
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getUserConnected()

        this.getDemPayList();
      })
    }

    else// if (this.per.idfinancier == this.UserIdConnected || this.per.idparfinancier == this.UserIdConnected || this.per.idpart == this.UserIdConnected) {
      { this.toastr.warning('لقد قمت بالموافقة ', 'فشل');


    }


  }

}
