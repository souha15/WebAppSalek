import { Component, OnInit } from '@angular/core';
import { DemPayChequeService } from '../../../shared/Services/Cheques/dem-pay-cheque.service';
import { ArticlePayChequeService } from '../../../shared/Services/Cheques/article-pay-cheque.service';
import { TbListeningService } from '../../../shared/Services/Evenements/tb-listening.service';
import { ListeningProjetService } from '../../../shared/Services/Projets/listening-projet.service';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { DemPayCheque } from '../../../shared/Models/Cheques/dem-pay-cheque.model';
import { ArticlePayCheque } from '../../../shared/Models/Cheques/article-pay-cheque.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cheque-pay-list-pay',
  templateUrl: './cheque-pay-list-pay.component.html',
  styleUrls: ['./cheque-pay-list-pay.component.css']
})
export class ChequePayListPayComponent implements OnInit {

  constructor(private demandeService: DemPayChequeService,
    private articleService: ArticlePayChequeService,
    private tbLService: TbListeningService,
    private tbLProjetService: ListeningProjetService,
    private UserService: UserServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.getDemPayList();
  }

  // Get User Connected
  p: Number = 1;
  count: Number = 5;
  UserIdConnected: string;
  UserNameConnected: string;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;

    })

  }


  //Get Dem pay ListProject
  dem1: DemPayCheque[] = [];
  dem2: DemPayCheque[] = [];
  arlis: ArticlePayCheque[] = [];
  arlis2: ArticlePayCheque[] = [];
  getDemPayList() {
    this.demandeService.Get().subscribe(res => {
      this.dem1 = res
      this.dem2 = this.dem1.filter(item => +item.etatnum < 3)

    })
  }


  //PopulateForm
  per: DemPayCheque = new DemPayCheque();


  populateForm(conge: DemPayCheque) {
    this.per = Object.assign({}, conge)
    this.articleService.Get().subscribe(res => {
      this.arlis2 = res;
      this.arlis = this.arlis2.filter(item => item.idDem == this.per.id)
    })
  }

  etat: string;
  ret: boolean = false;
  dec: boolean = false;
  etattest(event) {
    this.etat = event.target.value;
    if (this.etat == "إعادة") {
      this.ret = true;
    } else
    { this.ret = false; }
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
        this.getDemPayList();
      })
    } 
    if (this.per.etatnum == "1" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datepart = this.date;
      this.per.etatpart = "موافقة"
      this.per.nompart = this.UserNameConnected;
      this.per.idpart = this.UserIdConnected;
      this.per.etatnum = "2";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    } 

    if (this.per.etatnum == "2" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.dateparfinancier = this.date;
      this.per.etatparfinancier = "موافقة"
      this.per.nomparfinancier = this.UserNameConnected;
      this.per.idparfinancier = this.UserIdConnected;
      this.per.etatnum = "3";
      this.per.etatgeneral = "موافقة"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    }

    if (this.per.idfinancier == this.UserIdConnected || this.per.idparfinancier == this.UserIdConnected || this.per.idpart == this.UserIdConnected) {
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
        this.getDemPayList();
      })
    }
    if (this.per.etatnum == "1" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datepart = this.date;
      this.per.etatpart = "مرفوضة"
      this.per.nompart = this.UserNameConnected;
      this.per.idpart = this.UserIdConnected;
      this.per.etatnum = "2";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    }

    if (this.per.etatnum == "2" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.dateparfinancier = this.date;
      this.per.etatparfinancier = "مرفوضة"
      this.per.nomparfinancier = this.UserNameConnected;
      this.per.idparfinancier = this.UserIdConnected;
      this.per.etatnum = "3";
      this.per.etatgeneral = "مرفوضة"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    }

    if (this.per.idfinancier == this.UserIdConnected || this.per.idparfinancier == this.UserIdConnected || this.per.idpart == this.UserIdConnected) {
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
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    }
    if (this.per.etatnum == "1" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.datepart = this.date;
      this.per.etatpart = "للإنجاز"
      this.per.nompart = this.UserNameConnected;
      this.per.idpart = this.UserIdConnected;
      this.per.etatnum = "2";
      this.per.etatgeneral = "تحت الإجراء"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    }

    if (this.per.etatnum == "2" && this.per.idfinancier != this.UserIdConnected && this.per.idparfinancier != this.UserIdConnected && this.per.idpart != this.UserIdConnected) {
      this.per.dateparfinancier = this.date;
      this.per.etatparfinancier = "للإنجاز"
      this.per.nomparfinancier = this.UserNameConnected;
      this.per.idparfinancier = this.UserIdConnected;
      this.per.etatnum = "3";
      this.per.etatgeneral = "للإنجاز"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    }

    if (this.per.idfinancier == this.UserIdConnected || this.per.idparfinancier == this.UserIdConnected || this.per.idpart == this.UserIdConnected) {
      this.toastr.warning('لقد قمت بالموافقة ', 'فشل');


    }
  }

}
