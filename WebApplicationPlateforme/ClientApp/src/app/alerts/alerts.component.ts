import { Component, OnInit } from '@angular/core';
import { CongeService } from '../shared/Services/Rh/conge.service';
import { RecrutementService } from '../shared/Services/Rh/recrutement.service';
import { EquipementService } from '../shared/Services/Rh/equipement.service';
import { PermissionService } from '../shared/Services/Rh/permission.service';
import { Permission } from '../shared/Models/RH/permission.model';
import { Recrutement } from '../shared/Models/RH/recrutement.model';
import { Conge } from '../shared/Models/RH/conge.model';
import { Equipement } from '../shared/Models/RH/equipement.model';
import { UserServiceService } from '../shared/Services/User/user-service.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private congeService: CongeService,
    private recrutementService: RecrutementService,
    private equipementService: EquipementService,
    private permissionService: PermissionService,
    private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.CalculRequests();
  }

  //Get Id User Connected
  idUser: string;
  
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.idUser = res.id;
    })

  }


  perlis: Permission[] = [];
  Fperlis: Permission[] = [];
  nbPer: number;

  reclis: Recrutement[] = [];
  Freclis: Recrutement[] = [];
  nbRec: number;

  conglis: Conge[] = [];
  Fconglis: Conge[] = [];
  nbCong: number;

  equlis: Equipement[] = [];
  Fequlis: Equipement[] = [];
  nbEqu: number;
  nbRequests: number;
  CalculRequests() {
    this.congeService.Get().subscribe(res => {
      this.conglis = res
      this.Fconglis = this.conglis.filter(item => item.directeurid == this.idUser && item.attribut2 == "في الانتظار")
      this.nbCong = this.Fconglis.length;

      this.permissionService.Get().subscribe(res => {
        this.perlis = res
        this.Fperlis = this.perlis.filter(item => item.iddir == this.idUser && item.attribut3 =="في الانتظار")
        this.nbPer = this.Fperlis.length;
 
        this.equipementService.Get().subscribe(res => {
          this.equlis = res
          this.Fequlis = this.equlis.filter( item=> item.attribut2 =="في الانتظار")
          this.nbEqu = this.Fequlis.length;
          
          this.recrutementService.Get().subscribe(res => {
            this.reclis = res
            this.Freclis = this.reclis.filter(item => item.iddir == this.idUser && item.attribut2 == "في الانتظار")
            this.nbRec = this.Freclis.length;
    
            this.nbRequests = this.nbRec + this.nbPer + this.nbEqu + this.nbCong;
        
          })
        })
      })
    })

  }
}
