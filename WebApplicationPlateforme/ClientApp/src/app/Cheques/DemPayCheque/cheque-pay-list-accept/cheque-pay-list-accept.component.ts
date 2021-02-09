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
  selector: 'app-cheque-pay-list-accept',
  templateUrl: './cheque-pay-list-accept.component.html',
  styleUrls: ['./cheque-pay-list-accept.component.css']
})
export class ChequePayListAcceptComponent implements OnInit {

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
      this.dem2 = this.dem1.filter(item => item.etatgeneral =="موافقة")

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
  etattest(event) {
    this.etat = event.target.value;
  }

  date = new Date().toLocaleDateString();
  accept() {
    if (this.per.etatgeneral == "موافقة" && this.per.idadmin == null) {
      this.per.dateadmin = this.date;
      this.per.etatadmin = this.etat;
      this.per.nomadmin = this.UserNameConnected;
      this.per.idadmin = this.UserIdConnected;
      this.per.etatgeneral = "معتمدة"
      this.demandeService.PutObservableE(this.per).subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح');
        this.getDemPayList();
      })
    } else {
      this.toastr.warning('لقد  تم الإعتماد', 'فشل');
    }
  }
}
