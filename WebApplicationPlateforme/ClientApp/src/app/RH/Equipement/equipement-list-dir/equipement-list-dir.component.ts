import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../../../shared/Services/Rh/equipement.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { TbListeningService } from '../../../shared/Services/Evenements/tb-listening.service';
import { TbListening } from '../../../shared/Models/Evenements/tb-listening.model';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { Equipement } from '../../../shared/Models/RH/equipement.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-equipement-list-dir',
  templateUrl: './equipement-list-dir.component.html',
  styleUrls: ['./equipement-list-dir.component.css']
})
export class EquipementListDirComponent implements OnInit {


  constructor(private congeService: EquipementService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    private tblService: TbListeningService, ) { }

  ngOnInit(): void {
    this.CongeList();
    this.resetForm();
    this.getUserConnected();
    
  }
  onSubmit(form: NgForm) {
    this.updateRecord(form)
  }

  //Get UserConnected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;
  userc: UserDetail = new UserDetail();

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.userc = res
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })

  }



  //Get Conge Demand Lis

  congeList: Equipement[] = [];
  filtredCongeList: Equipement[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.iddir == this.UserIdConnected && item.attribut2 =="في الانتظار")
    })
  }


  etat: string;
  etattest(event) {
    this.etat = event.target.value;
  }

  conge: Equipement = new Equipement();
  date = new Date().toLocaleDateString();
  updateRecord(form: NgForm) {
    this.conge = Object.assign(this.conge, form.value);
    this.congeService.formData.datedir = this.date;
    this.congeService.formData.attribut2 = this.etat;
      this.congeService.Edit().subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح')
        this.resetForm();
        this.CongeList();
      },
        err => {
          this.toastr.error('لم يتم التحديث  ', ' فشل');
        }


      )

  }

  per: Equipement = new Equipement();
  populateForm(conge: Equipement) {
    this.per = Object.assign({}, conge)
    this.congeService.formData = Object.assign({}, conge)


  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.congeService.formData = {
      id: null,
      type: '',
      nom: '',
      email: '',
      tel: '',
      transfert: '',
      remarque: '',
      etatdir: '',
      date: '',
      datedir: '',
      iddir: '',
      nomdir: '',
      attribut1: null,
      attribut2: '',
      attribut3: '',
      attribut4: '',
      attribut5: '',
      attribut6: '',
      dateenreg: '',
      userNameCreator: '',
      idUserCreator: '',

    }
  }
}
