import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../shared/Models/Dotations/location.model';
import { LocationService } from '../../../shared/Services/Dotations/location.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { UniteService } from '../../../shared/Services/Dotations/unite.service';
import { DotationService } from '../../../shared/Services/Dotations/dotation.service';
import { LocataireService } from '../../../shared/Services/Dotations/locataire.service';
import { ServiceRevenusService } from '../../../shared/Services/Dotations/service-revenus.service';
import { RevenusService } from '../../../shared/Services/Dotations/revenus.service';
import { ServicesRevenus } from '../../../shared/Models/Dotations/services-revenus.model';
import { Revenus } from '../../../shared/Models/Dotations/revenus.model';
import { NgForm } from '@angular/forms';
import { LesServicesService } from '../../../shared/Services/Dotations/les-services.service';
import { LesServices } from '../../../shared/Models/Dotations/les-services.model';
import { ProgressStatus } from '../../../shared/Interfaces/progress-status';
import { UploadDownloadService } from '../../../shared/Services/Taches/upload-download.service';
import { PiecesJointesRevenus } from '../../../shared/Models/Dotations/pieces-jointes-revenus.model';
import { ProgressStatusEnum } from '../../../shared/Enum/progress-status-enum.enum';
import { HttpEventType, HttpClient } from '@angular/common/http';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PathSharedService } from '../../../shared/path-shared.service';
import { DepotRevenus } from '../../../shared/Models/Dotations/depot-revenus.model';
import { DepotRevenusService } from '../../../shared/Services/Dotations/depot-revenus.service';
import { Dotation } from '../../../shared/Models/Dotations/dotation.model';
import { Unite } from '../../../shared/Models/Dotations/unite.model';
import { LocataireDot } from '../../../shared/Models/Dotations/locataire-dot.model';
import { LocataireDotService } from '../../../shared/Services/Dotations/locataire-dot.service';


@Component({
  selector: 'app-enregistrer-revenus',
  templateUrl: './enregistrer-revenus.component.html',
  styleUrls: ['./enregistrer-revenus.component.css']
})
export class EnregistrerRevenusComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;
  @Input() public disabled: boolean;
  @Output() public uploadStatuss: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;
  @ViewChild('inputFile1') inputFile1: ElementRef;
  @ViewChild('inputFile2') inputFile2: ElementRef;

  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
    private LocationService: LocataireDotService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    private uniteService: UniteService,
    private dotationService: DotationService,
    private locataireService: LocataireService,
    private serviceRevenusService: ServiceRevenusService,
    private revenusService: RevenusService,
    private lesServicesServices: LesServicesService,
    public serviceupload: UploadDownloadService,
    private rootUrl: PathSharedService,
    private depotService: DepotRevenusService,
    private http: HttpClient,
  ) { this.uploadStatuss = new EventEmitter<ProgressStatus>(); }

  ngOnInit(): void {
    this.DotationList();
    this.getUserConnected();
    this.getFiles();
    this.getRevenusLis()

  }

  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })
  }

  //get Dotations
  dotationList: Dotation[] = [];

  DotationList() {
    this.dotationService.Get().subscribe(res => {
      this.dotationList = res
    })
  }


  //Get Unite List whith selected dotation

  uniteList: Unite[] = [];
  dotationid: string;
  UniteList() {
    if (this.dotationid != null) {
      this.uniteService.Get().subscribe(res => {
        this.uniteList = res  
          this.uniteList.filter(item => { item.idDotation == +this.dotationid })        
      })

    }
  }

  //Get Dotation Selected
  isDotationSelected: boolean = false;
  dotationName: string;
  selectInput(event) {
    this.dotationid = event.target.value;
    this.dotationService.GetById(+this.dotationid).subscribe(res => {
      this.dotationName = res.nom
      this.UniteList();
    })
  }


  // Get Selected Unite
  //get Unite
  uniteid: string;
  loc: LocataireDot[] = [];
  loc2: LocataireDot[] = [];
  listr1: Revenus[] = []
  listr2: Revenus[] = []
  locDetails: LocataireDot = new LocataireDot();
  LocationId: number;
  showtable: boolean = false;

  selectInput2(event) {
    this.uniteid = event.target.value;
    this.uniteService.GetById(+this.uniteid).subscribe(res => {
      this.revenus.numRevenusUnite = res.numRevenus
      this.revenus.idunite = +this.uniteid
      this.revenus.prixLocation = res.prix
      this.prixlocation = res.prix;
      this.LocationService.Get().subscribe(res => {
        this.loc = res
        this.loc2 =  this.loc.filter(item => item.idUnite == +this.uniteid && item.idDotation == +this.dotationid)
        this.loc2.forEach(item => {
          this.locDetails = item
          this.LocationRetard = this.locDetails
          this.LocationId = this.locDetails.id;
          this.locataireName = this.locDetails.nom;
          this.debutContrat = this.locDetails.datedebutcontrat;
          this.CalculRetard();
        })
      })

    })

    this.revenusService.Get().subscribe(res => {
      this.listr1 = res
      this.listr2 = this.listr1.filter(item => item.idunite == +this.uniteid)
      if (this.listr2.length != null) {
        this.showtable = true;
      }
    })
  }

  //Get Date Difference for new
  getDateDifferenceNew(currentdate, debutContrat): number
  {
    var currentmonth = currentdate.getMonth() + 1;
    var currentyear = currentdate.getFullYear();
    //Get Location Month and year
    let newDate = new Date(debutContrat);
    var MoisdebutContrat = newDate.getMonth() + 1
    var AnneedebutContrat = newDate.getFullYear();
    var months;
    months = (currentyear - AnneedebutContrat) * 12;
    months -= MoisdebutContrat;
    months += currentmonth;
    months <= 0 ? 0 : months;
    this.nbmonths = months + 1;
    return this.nbmonths
  }

  //Get Date Difference for old
  getDateDifferenceOld(currentdate, debutContrat): number {
    var currentmonth = currentdate.getMonth() + 1;
    var currentyear = currentdate.getFullYear();
    //Get Location Month and year
    let newDate = new Date(debutContrat);
    var MoisdebutContrat = newDate.getMonth() + 1
    var AnneedebutContrat = newDate.getFullYear();
    var months;
    months = (currentyear - AnneedebutContrat) * 12;
    months -= MoisdebutContrat;
    months += currentmonth;
    months <= 0 ? 0 : months;
    this.nbmonths = months + 1;
    return this.nbmonths
  }


  getRevenusLis() {
    //Filtering
    this.revenusService.Get().subscribe(res => {
      this.revenusRetardList = res
      return this.revenusRetardList;
    })
  }


  //Calcul de retard
  prixpaye: number;
  retardTest(event) {
    this.prixpaye = +event.target.value;
    this.tot = this.neded - +this.prixpaye
  }
  //Calcul retard
  revenus: Revenus = new Revenus();
  tot: number = 0;
  locataireName: string;
  prixlocation: string;
  dette: number =0;
  LocationRetard: LocataireDot = new LocataireDot();
  currentdate = new Date();
  revenusRetardList: Revenus[] = [];
  FiltredrevenusRetardList: Revenus[] = [];
  lastmonthModel: Revenus = new Revenus();
  lastmonthList: Revenus[] = [];
  nbmonths: any;
  neded: number = 0;
  debutContrat: any;
  nbMoisPaye: number = 0;
  nbMoisNonPaye: number = 0;
  CalculRetard() {

    if (this.LocationRetard.date == "جديد") {
      this.getRevenusLis();
      this.debutContrat = this.LocationRetard.datedebutcontrat;
      this.FiltredrevenusRetardList = this.revenusRetardList.filter(item => item.idunite == this.LocationRetard.idUnite && item.iddotation == this.LocationRetard.idDotation)
      this.nbMoisPaye = this.FiltredrevenusRetardList.length;
      this.nbmonths = this.getDateDifferenceNew(this.currentdate, this.debutContrat);
      this.nbMoisNonPaye = this.nbmonths - this.nbMoisPaye;
      if (this.FiltredrevenusRetardList.length == 0) {
        this.neded = +this.prixlocation * this.nbmonths
        this.dette =  this.neded - +this.prixlocation
      }
      else {
        //Get the last month


        this.lastmonthList = this.FiltredrevenusRetardList.sort((a, b) => new Date(a.dateenreg).getTime() - new Date(b.dateenreg).getTime());
        this.lastmonthModel = this.lastmonthList[this.lastmonthList.length - 1];
        console.log(this.lastmonthModel)
        console.log(this.lastmonthList)
        console.log(this.FiltredrevenusRetardList)
        if (this.nbMoisNonPaye == 0) {
          this.dette = 0;
          this.tot = null;
          this.neded = null;
        } else {
          this.neded = +this.prixlocation * this.nbMoisNonPaye + +this.lastmonthModel.restePrixService;
          this.dette = this.neded - +this.prixlocation
        }
      }


    } else {
      this.getRevenusLis();
      this.debutContrat = this.LocationRetard.attribut1;
      this.FiltredrevenusRetardList = this.revenusRetardList.filter(item => item.idunite == this.LocationRetard.idUnite && item.iddotation == this.LocationRetard.idDotation)
      this.nbMoisPaye = this.FiltredrevenusRetardList.length;
      this.nbmonths = this.getDateDifferenceNew(this.currentdate, this.debutContrat);
      this.nbMoisNonPaye = this.nbmonths - this.nbMoisPaye;
      if (this.FiltredrevenusRetardList.length == 0) {
        this.neded = +this.prixlocation * this.nbmonths + +this.LocationRetard.attribut5
        this.dette = this.neded - +this.prixlocation
      } else {


        this.lastmonthList = this.FiltredrevenusRetardList.sort((a, b) => new Date(a.dateenreg).getTime() - new Date(b.dateenreg).getTime());
        this.lastmonthModel = this.lastmonthList[this.lastmonthList.length - 1];
        console.log(this.lastmonthModel)
        console.log(this.lastmonthList)
        console.log(this.FiltredrevenusRetardList)
        if (this.nbMoisNonPaye == 0) {
          this.dette = 0;
          this.tot = null;
          this.neded = null;
        } else {
          this.neded = +this.prixlocation * this.nbMoisNonPaye + +this.lastmonthModel.restePrixService + +this.LocationRetard.attribut5;
          this.dette = this.neded - +this.prixlocation
        }
      }
   /*   this.revenusService.Get().subscribe(res => {

        this.revenusRetardList = res
        this.FiltredrevenusRetardList = this.revenusRetardList.filter(item => item.idunite == this.LocationRetard.idUnite && item.iddotation == this.LocationRetard.idDotation)
        if (this.FiltredrevenusRetardList.length < this.nbmonths) {
          this.nbMoisNonPaye = this.nbmonths - this.FiltredrevenusRetardList.length

          if (this.nbMoisNonPaye > 1) {
            this.nbMoisNonPaye = this.nbMoisNonPaye - 1;
            this.dette = this.dette + +this.prixlocation * this.nbMoisNonPaye;
            this.revenus.restePrixTotaleLocation = this.dette.toString();
          }
          if (this.nbMoisNonPaye == 1) {
            this.dette = this.dette
          }
          this.neded = +this.prixlocation + this.dette
        }


      }
      )*/
    }


  }

  Createdrevenus: Revenus = new Revenus();
  reste: number=0;
  prixser: number=0;
  isValidFormSubmitted = false;
  date = new Date().toLocaleString();
  revenusId: number;
  onSubmit(form: NgForm) {

    let path = this.rootUrl.getPath();
    this.fileslist.forEach(item => {
      this.revenus.attribut3 = item;

    })

    this.revenus.creatorName = this.UserNameConnected;
    this.revenus.idUserCreator = this.UserIdConnected;
    this.revenus.dateenreg = this.date;
    this.revenus.iddotation = +this.dotationid
    this.revenus.idLocDot = +this.locDetails.id
    this.revenus.idunite = +this.uniteid;
    this.revenus.nomDotation = this.dotationName;
    this.revenus.nomLocataire = this.locataireName;
    this.revenus.prixLocation = this.prixlocation;
    this.reste = +this.prixlocation - this.prixpaye;
    var diffsomme: number = 0;
    if (+this.prixpaye > +this.prixlocation) {
      diffsomme = +this.prixpaye - +this.prixlocation
      this.revenus.restePrixService = (+this.lastmonthModel.restePrixService - diffsomme).toString();
    } else if (+this.prixpaye == +this.prixlocation) {
      this.revenus.restePrixService = this.lastmonthModel.restePrixService
    } else {
      this.revenus.restePrixService = this.reste.toString();
    }
    this.revenus.restePrixTotale = this.tot.toString();
    let calc: number;
    calc = +this.dette - +this.prixlocation;
    this.dette = calc
    this.revenus.restePrixTotaleLocation = this.dette.toString();

    if (form.invalid) {
      this.isValidFormSubmitted = false;

    } else {
      this.isValidFormSubmitted = true
      this.revenusService.Add(this.revenus).subscribe(res => {

        this.revenusId = res.id
        if (this.dette < 0) {
          this.dette = 0
        } else {
          this.dette = calc
      }

        this.toastr.success("تمت الإضافة بنجاح", "نجاح");
        this.tot = null;
        this.dette = null;
        this.neded = null;
        this.prixlocation = null;
        this.locataireName = null;
        this.listr2.push(this.revenus)

        //Eau
        //upload1



        //upload 3




        form.resetForm();

      },
        err => {
          console.log(err);
          this.toastr.warning('لم تتم الإضافة', ' فشل');
        }
      )


    }
  }
 
  p: Number = 1;
  count: Number = 5;

  //Files


  public response: { 'dbpathsasstring': '' };
  public isCreate: boolean;
  public pj: PiecesJointesRevenus = new PiecesJointesRevenus();
  public pjs: PiecesJointesRevenus[];
  public pj1: PiecesJointesRevenus = new PiecesJointesRevenus();
  public pjs1: PiecesJointesRevenus[];
  public pj2: PiecesJointesRevenus = new PiecesJointesRevenus();
  public pjs2: PiecesJointesRevenus[];
  public files: string[];

  //get List of Files

  private getFiles() {
    this.serviceupload.getFiles().subscribe(
      data => {
        this.files = data

      }
    );

  }

  GetFileName() {
    let sa: string;
    let s: any;
    let finalres: any;
    let i: number = 0;
    let tlistnew: any[] = [];
    for (var k = 0; k < this.files.length; k++) {
      sa = <string>this.files[k]
      s = sa.toString().split('uploads\\,', sa.length - 1);
      finalres = s.toString().split('uploads\\', sa.length - 1);

      tlistnew[i] = finalres[1]
      i++;

    }


  }

  //upload 1


  url: any;
  file: any;
  fileslist: string[] = [];
  uplo: boolean = false;
  public upload1(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadStatuss.emit({ status: ProgressStatusEnum.START });
      this.serviceupload.uploadFile(this.file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                this.uploadStatuss.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                this.uploadStatuss.emit({ status: ProgressStatusEnum.COMPLETE });
                break;
            }
            this.getFiles();
            this.GetFileName();



          }

        },

        error => {
          this.inputFile.nativeElement.value = '';
          this.uploadStatuss.emit({ status: ProgressStatusEnum.ERROR });
        }
      );
      this.fileslist.push(this.file.name);
      console.log(this.fileslist)
    }
  }

  //DeleteFile


  onDelete(dp, i) {
    this.fileslist.splice(this.fileslist.indexOf(dp), 1);
  }
}
