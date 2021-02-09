import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../../shared/Services/Rh/conge.service';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { NgForm } from '@angular/forms';
import { Conge } from '../../../shared/Models/RH/conge.model';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {

  constructor(private congeService: CongeService,
    private UserService: UserServiceService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.UserList();
    this.resetForm();
  }


  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;
  soldeconge: string;
  userc: UserDetail = new UserDetail();

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.userc=res
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      this.conge.userNameCreator = res.fullName;
      this.conge.idUserCreator = res.id;
   
    })

  }


  //Get Users List
  user: UserDetail[] = [];
  UserList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.user = res;
    })
  }


  //Conge Submit
  conge: Conge = new Conge();
  isValidFormSubmitted = false;
  date = new Date().toLocaleDateString();
  onSubmit(form: NgForm) {
    this.conge.dateenreg = this.date;
    this.conge.etat = "في الانتظار";
    this.conge.etatd = "في الانتظار";
    this.conge.etatrh = "في الانتظار";
    this.conge.attribut2 = "في الانتظار";


    if (form.invalid) {
      this.isValidFormSubmitted = false;

    }
    else {

      this.isValidFormSubmitted = true

      this.congeService.Add(this.conge).subscribe(
        res => {
          this.toastr.success("تمت الإضافة بنجاح", "نجاح");
          form.resetForm();

        },
        err => {
          this.toastr.error("لم يتم التسجيل", "فشل في التسجيل")
        })

    }


  
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.UserService.formData = {
      id: '',
      userName: '',
      email: '',
      Password: '',
      registreCivil: '',
      FullNameEnglish: '',
      fullName: '',
      adresse: '',
      PhoneNumber: '',
      tel: '',
      statut: '',
      nationalite: '',
      religion: '',
      sexe: '',
      dateNaissance: '',
      lieuNaissance: '',
      passeport: '',
      typeSang: '',
      num: '',
      emploi: '',
      rang: '',
      typeEmploi: '',
      nomAdministration: '',
      nomDepartement: '',
      unite: '',
      qualification: '',
      typeQualification: '',
      faculteEcole: '',
      dateQualification: '',
      specialite: '',
      paysetude: '',
      mention: '',
      classement: '',
      degre: '',
      salaire: '',
      indemnite: '',
      autreIndemnite: '',
      heureArrive: '',
      heureDepart: '',
      photo: '',
      idAdministration: null,
      idDepartement: null,
      directeur: '',
      position: '',
      attribut1: '',
      attribut6: '',
      attribut5: '',
      attribut4: '',
      attribut3: '',
      attribut2: '',
      soldeconge: '',
      daterectrutement: '',
      etatuser: '',
      dateenreg: '',
      userNameCreator: '',
      idUserCreator: '',


    }
  }

}
