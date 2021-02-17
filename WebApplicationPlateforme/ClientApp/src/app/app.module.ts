import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginPageComponent } from './User/login-page/login-page.component';
import { UserInfoComponent } from './User/user-info/user-info.component';
import { MainTasksComponent } from './Tache/main-tasks/main-tasks.component';
import { NewTaskComponent } from './Tache/new-task/new-task.component';
import { TasksListComponent } from './Tache/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './Tache/task-details/task-details.component';
import { EvaluatedTaskComponent } from './Tache/evaluated-task/evaluated-task.component';
import { CompletedTaskComponent } from './Tache/completed-task/completed-task.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MailingComponent } from './mailing/mailing.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserServiceService } from './shared/Services/User/user-service.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/Services/User/auth/auth.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TasksListReceivedComponent } from './Tache/tasks-list-received/tasks-list-received.component';
import { TasksListDoneComponent } from './Tache/tasks-list-done/tasks-list-done.component';
import { TasksListDelayedComponent } from './Tache/tasks-list-delayed/tasks-list-delayed.component';
import { TasksListCreatedComponent } from './Tache/tasks-list-created/tasks-list-created.component';
import { EvaluationService } from './shared/Services/Taches/evaluation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './User/users-list/users-list.component';
import { PrivilegesService } from './shared/Services/User/privileges.service';
import { CommentaireService } from './shared/Services/Taches/commentaire.service';
import { TasksReportsComponent } from './Tache/tasks-reports/tasks-reports.component';
import { TasksReportsReceivedComponent } from './Tache/tasks-reports-received/tasks-reports-received.component';
import { AdministrationListComponent } from './Administration/administration-list/administration-list.component';
import { NewAdministrationComponent } from './Administration/new-administration/new-administration.component';
import { NewEtablissementComponent } from './Etablissement/new-etablissement/new-etablissement.component';
import { EtablissementListComponent } from './Etablissement/etablissement-list/etablissement-list.component';
import { UserUpdatingComponent } from './User/user-updating/user-updating.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { AuthInterceptor } from './shared/Services/User/auth/auth.interceptor';
import { EtablissementService } from './shared/Services/Etablissement/etablissement.service';
import { AdministrationService } from './shared/Services/Administration/administration.service';
import { TasksUpMenuComponent } from './Tache/tasks-up-menu/tasks-up-menu.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserChangePaswordComponent } from './User/user-change-pasword/user-change-pasword.component';
import { EnregistrerDotationComponent } from './Finances/Dotations/enregistrer-dotation/enregistrer-dotation.component';
import { ListeDotationComponent } from './Finances/Dotations/liste-dotation/liste-dotation.component';
import { DotationDetailsComponent } from './Finances/Dotations/dotation-details/dotation-details.component';
import { DotationEditComponent } from './Finances/Dotations/dotation-edit/dotation-edit.component';
import { UniteEditComponent } from './Finances/Unites/unite-edit/unite-edit.component';
import { UniteDetailsComponent } from './Finances/Unites/unite-details/unite-details.component';
import { EnregistrerUniteComponent } from './Finances/Unites/enregistrer-unite/enregistrer-unite.component';
import { ListeUniteComponent } from './Finances/Unites/liste-unite/liste-unite.component';
import { ListeLocataireComponent } from './Finances/Locataires/liste-locataire/liste-locataire.component';
import { EditLocataireComponent } from './Finances/Locataires/edit-locataire/edit-locataire.component';
import { LocataireDetailsComponent } from './Finances/Locataires/locataire-details/locataire-details.component';
import { RevenusDetailsComponent } from './Finances/Revenus/revenus-details/revenus-details.component';
import { RevenusListComponent } from './Finances/Revenus/revenus-list/revenus-list.component';
import { EnregistrerRevenusComponent } from './Finances/Revenus/enregistrer-revenus/enregistrer-revenus.component';
import { EditRevenusComponent } from './Finances/Revenus/edit-revenus/edit-revenus.component';
import { EnregistrerLocataireComponent } from './Finances/Locataires/enregistrer-locataire/enregistrer-locataire.component';
import { DepotRevenusComponent } from './Finances/Parametrage/depot-revenus/depot-revenus.component';
import { ServiceRevenusComponent } from './Finances/Parametrage/service-revenus/service-revenus.component';
import { TypedotationComponent } from './Finances/Parametrage/typedotation/typedotation.component';
import { EtatdotationComponent } from './Finances/Parametrage/etatdotation/etatdotation.component';
import { EtatuniteComponent } from './Finances/Parametrage/etatunite/etatunite.component';
import { TypeuniteComponent } from './Finances/Parametrage/typeunite/typeunite.component';
import { MenuFinanceComponent } from './Finances/Main/menu-finance/menu-finance.component';
import { MainFinancePageComponent } from './Finances/Main/main-finance-page/main-finance-page.component';
import { MainFarametrageFinancePageComponent } from './Finances/Parametrage/main-farametrage-finance-page/main-farametrage-finance-page.component';
import { TypeDotationService } from './shared/Services/Dotations/type-dotation.service';
import { EtatDotationService } from './shared/Services/Dotations/etat-dotation.service';
import { BureauImmobPageComponent } from './Finances/Parametrage/bureau-immob-page/bureau-immob-page.component';
import { AgenceImmobService } from './shared/Services/Dotations/agence-immob.service';
import { TypeUniteService } from './shared/Services/Dotations/type-unite.service';
import { EtatUniteService } from './shared/Services/Dotations/etat-unite.service';
import { ServiceRevenusService } from './shared/Services/Dotations/service-revenus.service';
import { UniteService } from './shared/Services/Dotations/unite.service';
import { LocataireService } from './shared/Services/Dotations/locataire.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DepotRevenusService } from './shared/Services/Dotations/depot-revenus.service';
import { OrganismeComponent } from './AdministrativeCommunication/ParametrageCA/organisme/organisme.component';
import { ProprietaireComponent } from './AdministrativeCommunication/ParametrageCA/proprietaire/proprietaire.component';
import { EnregistrerTRRecueComponent } from './AdministrativeCommunication/Transaction/Recue/enregistrer-tr-recue/enregistrer-tr-recue.component';
import { MyListeTrComponent } from './AdministrativeCommunication/Transaction/Recue/my-liste-tr/my-liste-tr.component';
import { MyListeTrEmiseComponent } from './AdministrativeCommunication/Transaction/Emise/my-liste-tr-emise/my-liste-tr-emise.component';
import { EnregistrerTREComponent } from './AdministrativeCommunication/Transaction/Emise/enregistrer-tre/enregistrer-tre.component';
import { EnregistrerTRIComponent } from './AdministrativeCommunication/Transaction/Interne/enregistrer-tri/enregistrer-tri.component';
import { MyListeTrIComponent } from './AdministrativeCommunication/Transaction/Interne/my-liste-tr-i/my-liste-tr-i.component';
import { MyListeDecisionComponent } from './AdministrativeCommunication/Transaction/Decision/my-liste-decision/my-liste-decision.component';
import { EnregistrerDecisionComponent } from './AdministrativeCommunication/Transaction/Decision/enregistrer-decision/enregistrer-decision.component';
import { ACMenuComponent } from './AdministrativeCommunication/ParametrageCA/acmenu/acmenu.component';
import { ListeOrganismeComponent } from './AdministrativeCommunication/ParametrageCA/liste-organisme/liste-organisme.component';
import { ListeProprietaireComponent } from './AdministrativeCommunication/ParametrageCA/liste-proprietaire/liste-proprietaire.component';
import { MainPageACComponent } from './AdministrativeCommunication/Main-Menu/main-page-ac/main-page-ac.component';
import { MainPageAC2Component } from './AdministrativeCommunication/Main-Menu/main-page-ac2/main-page-ac2.component';
import { TransactionsRListComponent } from './AdministrativeCommunication/Transaction/Recue/transactions-rlist/transactions-rlist.component';
import { EnregDefRComponent } from './AdministrativeCommunication/Transaction/Recue/enreg-def-r/enreg-def-r.component';
import { EnregTempRComponent } from './AdministrativeCommunication/Transaction/Recue/enreg-temp-r/enreg-temp-r.component';
import { EnregRComponent } from './AdministrativeCommunication/Transaction/Recue/enreg-r/enreg-r.component';
import { AfftectedToMyAdminRComponent } from './AdministrativeCommunication/Transaction/Recue/afftected-to-my-admin-r/afftected-to-my-admin-r.component';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { TransactionsElistComponent } from './AdministrativeCommunication/Transaction/Emise/transactions-elist/transactions-elist.component';
import { EnregEComponent } from './AdministrativeCommunication/Transaction/Emise/enreg-e/enreg-e.component';
import { AfftectedToMyAdminEComponent } from './AdministrativeCommunication/Transaction/Emise/afftected-to-my-admin-e/afftected-to-my-admin-e.component';
import { EnregTempEComponent } from './AdministrativeCommunication/Transaction/Emise/enreg-temp-e/enreg-temp-e.component';
import { EnregDefEComponent } from './AdministrativeCommunication/Transaction/Emise/enreg-def-e/enreg-def-e.component';
import { RappotEmiseComponent } from './AdministrativeCommunication/Rapport/rappot-emise/rappot-emise.component';
import { RapportInterneComponent } from './AdministrativeCommunication/Rapport/rapport-interne/rapport-interne.component';
import { RapportRecueComponent } from './AdministrativeCommunication/Rapport/rapport-recue/rapport-recue.component';
import { EnregDefIComponent } from './AdministrativeCommunication/Transaction/Interne/enreg-def-i/enreg-def-i.component';
import { EnregTempIComponent } from './AdministrativeCommunication/Transaction/Interne/enreg-temp-i/enreg-temp-i.component';
import { EnregIComponent } from './AdministrativeCommunication/Transaction/Interne/enreg-i/enreg-i.component';
import { AffectedToMyAdminIComponent } from './AdministrativeCommunication/Transaction/Interne/affected-to-my-admin-i/affected-to-my-admin-i.component';
import { BeneficiaireCComponent } from './Evenement/beneficiaire-c/beneficiaire-c.component';
import { TacheEvCComponent } from './Evenement/tache-ev-c/tache-ev-c.component';
import { OutilsCComponent } from './Evenement/outils-c/outils-c.component';
import { MediasCComponent } from './Evenement/medias-c/medias-c.component';
import { ClasseCComponent } from './Evenement/classe-c/classe-c.component';
import { TblMenuComponent } from './Evenement/tbl-menu/tbl-menu.component';
import { TblMainComponent } from './Evenement/tbl-main/tbl-main.component';
import { EventRegisterComponent } from './Evenement/event-register/event-register.component';
import { EventDetailsComponent } from './Evenement/event-details/event-details.component';
import { EventListComponent } from './Evenement/event-list/event-list.component';
import { ActivityCComponent } from './Evenement/activity-c/activity-c.component';
import { DepenseCComponent } from './Evenement/depense-c/depense-c.component';
import { DemandeCongeComponent } from './RH/Conge/demande-conge/demande-conge.component';
import { MyListCongeComponent } from './RH/Conge/my-list-conge/my-list-conge.component';
import { ValidateCongeComponent } from './RH/Conge/validate-conge/validate-conge.component';
import { SuivieCongeComponent } from './RH/Conge/suivie-conge/suivie-conge.component';
import { PermissionAddComponent } from './RH/Permission/permission-add/permission-add.component';
import { PermissionListComponent } from './RH/Permission/permission-list/permission-list.component';
import { NomEquipementComponent } from './RH/Equipement/nom-equipement/nom-equipement.component';
import { TypeEquipementComponent } from './RH/Equipement/type-equipement/type-equipement.component';
import { EquipementAddComponent } from './RH/Equipement/equipement-add/equipement-add.component';
import { EquipementListComponent } from './RH/Equipement/equipement-list/equipement-list.component';
import { RecrutementListComponent } from './RH/Recrutement/recrutement-list/recrutement-list.component';
import { RecrutementAddComponent } from './RH/Recrutement/recrutement-add/recrutement-add.component';
import { EquipementListDirComponent } from './RH/Equipement/equipement-list-dir/equipement-list-dir.component';
import { PermissionUListDirComponent } from './RH/Permission/permission-list-dir/permission-list-dir.component';
import { MenurequestsComponent } from './RH/menurequests/menurequests.component';
import { NavmenurequestsComponent } from './RH/navmenurequests/navmenurequests.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TicketAddComponent } from './RH/DemandeTicket/ticket-add/ticket-add.component';
import { TicketMyLisComponent } from './RH/DemandeTicket/ticket-my-lis/ticket-my-lis.component';
import { TicketDirLisComponent } from './RH/DemandeTicket/ticket-dir-lis/ticket-dir-lis.component';
import { SalaialeAddComponent } from './RH/DemandeSalariale/salaiale-add/salaiale-add.component';
import { SalaialeMyLisComponent } from './RH/DemandeSalariale/salaiale-my-lis/salaiale-my-lis.component';
import { SalaialeDirLisComponent } from './RH/DemandeSalariale/salaiale-dir-lis/salaiale-dir-lis.component';
import { SoldeCongeComponent } from './RH/Conge/solde-conge/solde-conge.component';
import { EmployeeAddComponent } from './User/employee-add/employee-add.component';
import { EmployeePrivilegesUpdateComponent } from './User/employee-privileges-update/employee-privileges-update.component';
import { EmployeePrivilegesAddComponent } from './User/employee-privileges-add/employee-privileges-add.component';
import { EmployeeUpdateComponent } from './User/employee-update/employee-update.component';
import { RecrutmenetDirListComponent } from './RH/Recrutement/recrutmenet-dir-list/recrutmenet-dir-list.component';
import { MyListRecrutmentComponent } from './RH/Recrutement/my-list-recrutment/my-list-recrutment.component';
import { RhRecrutmentListComponent } from './RH/Recrutement/rh-recrutment-list/rh-recrutment-list.component';
import { RhCongeListComponent } from './RH/Conge/rh-conge-list/rh-conge-list.component';
import { NewsDetailComponent } from './News/news-detail/news-detail.component';
import { NewsAddComponent } from './News/news-add/news-add.component';
import { NewsListViewerComponent } from './News/news-list-viewer/news-list-viewer.component';
import { NewsListCreatorComponent } from './News/news-list-creator/news-list-creator.component';
import { PrivAddComponent } from './RH/PrivilegesRequests/priv-add/priv-add.component';
import { MyPrivListComponent } from './RH/PrivilegesRequests/my-priv-list/my-priv-list.component';
import { PrivListDirComponent } from './RH/PrivilegesRequests/priv-list-dir/priv-list-dir.component';
import { PrivListRhComponent } from './RH/PrivilegesRequests/priv-list-rh/priv-list-rh.component';
import { CarsAddComponent } from './voiture/cars-add/cars-add.component';
import { CarsListComponent } from './voiture/cars-list/cars-list.component';
import { CarsRepairRequestAddComponent } from './voiture/cars-repair-request-add/cars-repair-request-add.component';
import { CarsRepairRequestListComponent } from './voiture/cars-repair-request-list/cars-repair-request-list.component';
import { CarsMenuComponent } from './voiture/cars-menu/cars-menu.component';
import { FinanceMenuParamComponent } from './Finance/Parametrage/finance-menu-param/finance-menu-param.component';
import { TypeBeneficiaireComponent } from './Finance/Parametrage/type-beneficiaire/type-beneficiaire.component';
import { TypeDepenseComponent } from './Finance/Parametrage/type-depense/type-depense.component';
import { BrancheOneComponent } from './Finance/Parametrage/branche-one/branche-one.component';
import { BrancheTwoComponent } from './Finance/Parametrage/branche-two/branche-two.component';
import { TypeFactureComponent } from './Finance/Parametrage/type-facture/type-facture.component';
import { ProjetProgComponent } from './Finance/Parametrage/projet-prog/projet-prog.component';
import { FactureAddComponent } from './Finance/Facture/facture-add/facture-add.component';
import { FactureListComptableComponent } from './Finance/Facture/facture-list-comptable/facture-list-comptable.component';
import { FactureListDirecteurComponent } from './Finance/Facture/facture-list-directeur/facture-list-directeur.component';
import { AcceptedFactureComponent } from './Finance/Facture/accepted-facture/accepted-facture.component';
import { MainNotAcceptedComponent } from './Finance/Main/main-not-accepted/main-not-accepted.component';
import { MainReadyPayementComponent } from './Finance/Main/main-ready-payement/main-ready-payement.component';
import { CreanceFinancireAddComponent } from './Finance/Creance Financiere/creance-financire-add/creance-financire-add.component';
import { CreanceFinancireListComponent } from './Finance/Creance Financiere/creance-financire-list/creance-financire-list.component';
import { MenuReadyPayementComponent } from './Finance/Main/menu-ready-payement/menu-ready-payement.component';
import { MenuNotAcceptedComponent } from './Finance/Main/menu-not-accepted/menu-not-accepted.component';
import { MainAcceptedComponent } from './Finance/Main/main-accepted/main-accepted.component';
import { MaenuAcceptedComponent } from './Finance/Main/maenu-accepted/maenu-accepted.component';
import { CreFinanAddComponent } from './Finance/Depense Exploitation/cre-finan-add/cre-finan-add.component';
import { CreFinanListEmployeeComponent } from './Finance/Depense Exploitation/cre-finan-list-employee/cre-finan-list-employee.component';
import { CreFinanListDirectorComponent } from './Finance/Depense Exploitation/cre-finan-list-director/cre-finan-list-director.component';
import { CreFinanListAcceptedComponent } from './Finance/Depense Exploitation/cre-finan-list-accepted/cre-finan-list-accepted.component';
import { CreFinanListComptableComponent } from './Finance/Depense Exploitation/cre-finan-list-comptable/cre-finan-list-comptable.component';
import { AvanceAddComponent } from './Finance/Avance/avance-add/avance-add.component';
import { AvanceListEComponent } from './Finance/Avance/avance-list-e/avance-list-e.component';
import { AvanceListCComponent } from './Finance/Avance/avance-list-c/avance-list-c.component';
import { AvanceListDComponent } from './Finance/Avance/avance-list-d/avance-list-d.component';
import { AvanceListNotAcceptedComponent } from './Finance/Avance/avance-list-not-accepted/avance-list-not-accepted.component';
import { MainAcceptedAvanceComponent } from './Finance/Main/main-accepted-avance/main-accepted-avance.component';
import { MainNotAcceptedAvanceComponent } from './Finance/Main/main-not-accepted-avance/main-not-accepted-avance.component';
import { MainReadyAvanceComponent } from './Finance/Main/main-ready-avance/main-ready-avance.component';
import { RecepChequeAddComponent } from './Finance/Reception cheque/recep-cheque-add/recep-cheque-add.component';
import { RecepChequeListComponent } from './Finance/Reception cheque/recep-cheque-list/recep-cheque-list.component';
import { EventTwoAddComponent } from './EventsTwo/event-two-add/event-two-add.component';
import { EventTwoDetailComponent } from './EventsTwo/event-two-detail/event-two-detail.component';
import { EventTwoGalleryComponent } from './EventsTwo/event-two-gallery/event-two-gallery.component';
import { EventTwoListComponent } from './EventsTwo/event-two-list/event-two-list.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TypeVoitureComponent } from './voiture/Parametrage/type-voiture/type-voiture.component';
import { OrganismeVoitureComponent } from './voiture/Parametrage/organisme-voiture/organisme-voiture.component';
import { DirectorListCarsComponent } from './voiture/director-list-cars/director-list-cars.component';
import { ComptableListCarsComponent } from './voiture/comptable-list-cars/comptable-list-cars.component';
import { RecueDonsAddComponent } from './Dons/RecueDons/recue-dons-add/recue-dons-add.component';
import { RecueDonsListComponent } from './Dons/RecueDons/recue-dons-list/recue-dons-list.component';
import { PayementReceptionAddComponent } from './Dons/ReceptionPayement/payement-reception-add/payement-reception-add.component';
import { PayementReceptionListComponent } from './Dons/ReceptionPayement/payement-reception-list/payement-reception-list.component';
import { DonsReportsComponent } from './Reports/dons-reports/dons-reports.component';
import { ProjDonsComponent } from './Dons/proj-dons/proj-dons.component';
import { RecuEmpDateComponent } from './Reports/recu-emp-date/recu-emp-date.component';
import { RecuDateComponent } from './Reports/recu-date/recu-date.component';
import { RecuEmpPeriodeComponent } from './Reports/recu-emp-periode/recu-emp-periode.component';
import { RecuProjDateComponent } from './Reports/recu-proj-date/recu-proj-date.component';
import { RecuProjPriodComponent } from './Reports/recu-proj-priod/recu-proj-priod.component';
import { RecuNbDateComponent } from './Reports/recu-nb-date/recu-nb-date.component';
import { RecuNbPeriodComponent } from './Reports/recu-nb-period/recu-nb-period.component';
import { RevenusEmpMonthComponent } from './Reports/revenus-emp-month/revenus-emp-month.component';
import { RevenusMonthComponent } from './Reports/revenus-month/revenus-month.component';
import { RevenusPeriodComponent } from './Reports/revenus-period/revenus-period.component';
import { RevenusEmpPeriodComponent } from './Reports/revenus-emp-period/revenus-emp-period.component';
import { RevenusEmpDateComponent } from './Reports/revenus-emp-date/revenus-emp-date.component';
import { RevenusEmpDateMonthComponent } from './Reports/revenus-emp-date-month/revenus-emp-date-month.component';
import { FormationAddComponent } from './ServiceRh/Formation/formation-add/formation-add.component';
import { FormationListComponent } from './ServiceRh/Formation/formation-list/formation-list.component';
import { FormationShowComponent } from './ServiceRh/Formation/formation-show/formation-show.component';
import { SpecialiteComponent } from './ServiceRh/Formation/specialite/specialite.component';
import { MenuFormationComponent } from './ServiceRh/Formation/menu-formation/menu-formation.component';
import { CrudEventsTwoComponent } from './EventsTwo/crud-events-two/crud-events-two.component';
import { CrudNewsComponent } from './News/crud-news/crud-news.component';
import { MaitenanceRequestAddComponent } from './ServiceRh/Maintenance/maitenance-request-add/maitenance-request-add.component';
import { MaitenanceRequestListComponent } from './ServiceRh/Maintenance/maitenance-request-list/maitenance-request-list.component';
import { MaitenanceRequestMecanicalListComponent } from './ServiceRh/Maintenance/maitenance-request-mecanical-list/maitenance-request-mecanical-list.component';
import { MainServicesPageComponent } from './ServiceRh/main-services-page/main-services-page.component';
import { PanneComponent } from './ServiceRh/Maintenance/panne/panne.component';
import { SuppHeureAddComponent } from './ServiceRh/SuppHeure/supp-heure-add/supp-heure-add.component';
import { SuppHeureListComponent } from './ServiceRh/SuppHeure/supp-heure-list/supp-heure-list.component';
import { DemandeSuppHeureListComponent } from './ServiceRh/SuppHeure/demande-supp-heure-list/demande-supp-heure-list.component';
import { DemandeSuppHeureAddComponent } from './ServiceRh/SuppHeure/demande-supp-heure-add/demande-supp-heure-add.component';
import { DemandeSuppHeureListcreatorComponent } from './ServiceRh/SuppHeure/demande-supp-heure-listcreator/demande-supp-heure-listcreator.component';
import { DemandeSuppHeureListDirectorComponent } from './ServiceRh/SuppHeure/demande-supp-heure-list-director/demande-supp-heure-list-director.component';
import { MenuSuppHeureComponent } from './ServiceRh/SuppHeure/menu-supp-heure/menu-supp-heure.component';
import { EmployeeMaintRequestListComponent } from './ServiceRh/Maintenance/employee-maint-request-list/employee-maint-request-list.component';
import { NomFileOrgComponent } from './FilesOrg/nom-file-org/nom-file-org.component';
import { FilesorgAddComponent } from './FilesOrg/filesorg-add/filesorg-add.component';
import { FilesorgLisComponent } from './FilesOrg/filesorg-lis/filesorg-lis.component';
import { FilesorgMenuComponent } from './FilesOrg/filesorg-menu/filesorg-menu.component';
import { FilesEmployeeComponent } from './FilesOrg/files-employee/files-employee.component';
import { AttestationTravailAddComponent } from './ServiceRh/AttestationTravail/attestation-travail-add/attestation-travail-add.component';
import { AttestationTravailLisComponent } from './ServiceRh/AttestationTravail/attestation-travail-lis/attestation-travail-lis.component';
import { AttestationTravailRhListComponent } from './ServiceRh/AttestationTravail/attestation-travail-rh-list/attestation-travail-rh-list.component';
import { TransfertInterneAddComponent } from './Transfert Interne/transfert-interne-add/transfert-interne-add.component';
import { TransfertInterneShowComponent } from './Transfert Interne/transfert-interne-show/transfert-interne-show.component';
import { TransfertInterneListComponent } from './Transfert Interne/transfert-interne-list/transfert-interne-list.component';
import { ReceptionEquipementAddComponent } from './ServiceRh/Reception Equipement/reception-equipement-add/reception-equipement-add.component';
import { ReceptionEquipementListComponent } from './ServiceRh/Reception Equipement/reception-equipement-list/reception-equipement-list.component';
import { ReceptionEquipementListRhComponent } from './ServiceRh/Reception Equipement/reception-equipement-list-rh/reception-equipement-list-rh.component';
import { DecisionListComponent } from './AdministrativeCommunication/Transaction/Decision/decision-list/decision-list.component';
import { SuppEquipementComponent } from './ServiceRh/Reception Equipement/supp-equipement/supp-equipement.component';
import { DemandeFormationAddComponent } from './ServiceRh/DemandeFormation/demande-formation-add/demande-formation-add.component';
import { DemandeFormationLisComponent } from './ServiceRh/DemandeFormation/demande-formation-lis/demande-formation-lis.component';
import { DemandeFormationListRhComponent } from './ServiceRh/DemandeFormation/demande-formation-list-rh/demande-formation-list-rh.component';
import { DemandeFormationListCComponent } from './ServiceRh/DemandeFormation/demande-formation-list-c/demande-formation-list-c.component';
import { DemandeFormationListdirComponent } from './ServiceRh/DemandeFormation/demande-formation-listdir/demande-formation-listdir.component';
import { DemandeFormationUserAddComponent } from './ServiceRh/DemandeFormation/demande-formation-user-add/demande-formation-user-add.component';
import { NewFormationRequestAddComponent } from './ServiceRh/DemandeFormation/new-formation-request-add/new-formation-request-add.component';
import { NewFormationRequestListComponent } from './ServiceRh/DemandeFormation/new-formation-request-list/new-formation-request-list.component';
import { MyFormationComponent } from './ServiceRh/DemandeFormation/my-formation/my-formation.component';
import { MyEquipementComponent } from './ServiceRh/Reception Equipement/my-equipement/my-equipement.component';
import { FormationexistsListdirComponent } from './ServiceRh/DemandeFormation/formationexists-listdir/formationexists-listdir.component';
import { CreationAddComponent } from './ServiceRh/CreationTravail/creation-add/creation-add.component';
import { CreationListComponent } from './ServiceRh/CreationTravail/creation-list/creation-list.component';
import { CreationListRhComponent } from './ServiceRh/CreationTravail/creation-list-rh/creation-list-rh.component';
import { CreationListDirComponent } from './ServiceRh/CreationTravail/creation-list-dir/creation-list-dir.component';
import { CreationListDirGComponent } from './ServiceRh/CreationTravail/creation-list-dir-g/creation-list-dir-g.component';
import { FilesCrudEmployeeComponent } from './FilesOrg/files-crud-employee/files-crud-employee.component';
import { DotationMenuComponent } from './Finances/Main/dotation-menu/dotation-menu.component';
import { ProjetAddComponent } from './Projets/Main/projet-add/projet-add.component';
import { ProjetListComponent } from './Projets/Main/projet-list/projet-list.component';
import { ProjetDetailsComponent } from './Projets/Main/projet-details/projet-details.component';
import { ProjetMenuComponent } from './Projets/Main/projet-menu/projet-menu.component';
import { ProjetListingMenuComponent } from './Projets/Listing/projet-listing-menu/projet-listing-menu.component';
import { ProjetCompteComponent } from './Projets/Listing/projet-compte/projet-compte.component';
import { ProjetOrgSuppComponent } from './Projets/Listing/projet-org-supp/projet-org-supp.component';
import { ProjetClassComponent } from './Projets/Listing/projet-class/projet-class.component';
import { ProjetPayActiviteComponent } from './Projets/Listing/projet-pay-activite/projet-pay-activite.component';
import { ProjetPayTypeComponent } from './Projets/Listing/projet-pay-type/projet-pay-type.component';
import { EventEditComponent } from './Evenement/event-edit/event-edit.component';
import { ProjetEditComponent } from './Projets/Main/projet-edit/projet-edit.component';
import { ProjetAdd2Component } from './Projets/Main/projet-add2/projet-add2.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ComptesListComponent } from './Comptes/comptes-list/comptes-list.component';
import { EtatComptesAddComponent } from './Comptes/etat-comptes-add/etat-comptes-add.component';
import { EditEtatCompteComponent } from './Comptes/edit-etat-compte/edit-etat-compte.component';
import { EtatCompteSettingsComponent } from './Comptes/etat-compte-settings/etat-compte-settings.component';
import { ServiceBanqueAddComponent } from './Comptes/service-banque-add/service-banque-add.component';
import { ServiceBanqueLisComponent } from './Comptes/service-banque-lis/service-banque-lis.component';
import { MenuCompteComponent } from './Comptes/menu-compte/menu-compte.component';
import { MenuSettingsCompteComponent } from './Comptes/menu-settings-compte/menu-settings-compte.component';
import { SuppliesAddComponent } from './Supplies/supplies-add/supplies-add.component';
import { SuppliesListComponent } from './Supplies/supplies-list/supplies-list.component';
import { SuppliesEditComponent } from './Supplies/supplies-edit/supplies-edit.component';
import { ChequecAddComponent } from './Cheques/Cheque/chequec-add/chequec-add.component';
import { ChequecLisComponent } from './Cheques/Cheque/chequec-lis/chequec-lis.component';
import { ChequecEditComponent } from './Cheques/Cheque/chequec-edit/chequec-edit.component';
import { ChequecDetailsComponent } from './Cheques/Cheque/chequec-details/chequec-details.component';
import { PayChequecAddComponent } from './Cheques/DemPayCheque/pay-chequec-add/pay-chequec-add.component';
import { PayChequecLisComponent } from './Cheques/DemPayCheque/pay-chequec-lis/pay-chequec-lis.component';
import { PayChequecDetailComponent } from './Cheques/DemPayCheque/pay-chequec-detail/pay-chequec-detail.component';
import { PayChequecEditComponent } from './Cheques/DemPayCheque/pay-chequec-edit/pay-chequec-edit.component';
import { MenuChequeComponent } from './Cheques/menu-cheque/menu-cheque.component';
import { ChequePayListAcceptComponent } from './Cheques/DemPayCheque/cheque-pay-list-accept/cheque-pay-list-accept.component';
import { ChequePayListPayComponent } from './Cheques/DemPayCheque/cheque-pay-list-pay/cheque-pay-list-pay.component';
import { ChequeclasseComponent } from './Cheques/chequeclasse/chequeclasse.component';
import { SalaireAddComponent } from './Salaire/salaire-add/salaire-add.component';
import { SalaireMenu1Component } from './Salaire/salaire-menu1/salaire-menu1.component';
import { SalaireMenu2Component } from './Salaire/salaire-menu2/salaire-menu2.component';
import { SalaireListGlobalComponent } from './Salaire/salaire-list-global/salaire-list-global.component';
import { SalaireListDetailsComponent } from './Salaire/salaire-list-details/salaire-list-details.component';
import { SalaireDetailsComponent } from './Salaire/salaire-details/salaire-details.component';
import { GestionSuupliesComponent } from './Supplies/gestion-suuplies/gestion-suuplies.component';
import { UserDetailDataComponent } from './User/user-detail-data/user-detail-data.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { NavUserMenuComponent } from './User/nav-user-menu/nav-user-menu.component';
import { DemissionAddComponent } from './UserServices/demission-add/demission-add.component';
import { SalaireReportAddComponent } from './UserServices/salaire-report-add/salaire-report-add.component';
import { SalaireReportPrintComponent } from './UserServices/salaire-report-print/salaire-report-print.component';
import { DemissioListComponent } from './UserServices/demissio-list/demissio-list.component';
import { DemissioListdirComponent } from './UserServices/demissio-listdir/demissio-listdir.component';

import { PlaintAddComponent } from './UserServices/plaint-add/plaint-add.component';
import { PlaintListComponent } from './UserServices/plaint-list/plaint-list.component';
import { PlaintListdirComponent } from './UserServices/plaint-listdir/plaint-listdir.component';
import { PlaintEditComponent } from './UserServices/plaint-edit/plaint-edit.component';
import { PermoissionEditComponent } from './UserServices/permoission-edit/permoission-edit.component';
import { DemissionEditComponent } from './UserServices/demission-edit/demission-edit.component';
import { ResidenceAddComponent } from './UserServices/residence-add/residence-add.component';
import { ResidenceListComponent } from './UserServices/residence-list/residence-list.component';
import { ResidenceListDirComponent } from './UserServices/residence-list-dir/residence-list-dir.component';
import { ExperienceAddComponent } from './UserServices/experience-add/experience-add.component';
import { ExperiencePrintComponent } from './UserServices/experience-print/experience-print.component';
import { ResidenceEditComponent } from './UserServices/residence-edit/residence-edit.component';
import { LangueEvComponent } from './Evenement/langue-ev/langue-ev.component';
import { TacheGlobalDetailsComponent } from './Tache/tache-global-details/tache-global-details.component';
import { TacheReceivedDetailsComponent } from './Tache/tache-received-details/tache-received-details.component';
import { TacheARecevoirDetailsComponent } from './Tache/tache-arecevoir-details/tache-arecevoir-details.component';
import { LocataireDotAddComponent } from './Finances/LocataireDot/locataire-dot-add/locataire-dot-add.component';
import { LocataireDotDetailsComponent } from './Finances/LocataireDot/locataire-dot-details/locataire-dot-details.component';
import { LocataireDotEditComponent } from './Finances/LocataireDot/locataire-dot-edit/locataire-dot-edit.component';
import { LocataireDotListComponent } from './Finances/LocataireDot/locataire-dot-list/locataire-dot-list.component';
import { NotiftacheComponent } from './Tache/notiftache/notiftache.component';
import { TimelinetacheComponent } from './Tache/timelinetache/timelinetache.component';
import { TaskListAdminComponent } from './Tache/AdminTask/task-list-admin/task-list-admin.component';
import { TaskEditAdminComponent } from './Tache/AdminTask/task-edit-admin/task-edit-admin.component';
import { UserRolesEditComponent } from './UserRoles/user-roles-edit/user-roles-edit.component';
import { UserRolesListComponent } from './UserRoles/user-roles-list/user-roles-list.component';
import { UserRolesDetailsComponent } from './UserRoles/user-roles-details/user-roles-details.component';
import { TasksNotDoneComponent } from './Tache/tasks-not-done/tasks-not-done.component';
import { TasksInProgressComponent } from './Tache/tasks-in-progress/tasks-in-progress.component';
import { AddingTransactionsPageComponent } from './AdministrativeCommunication/newPages/adding-transactions-page/adding-transactions-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountdownModule } from 'ngx-countdown';
import { TransactionGlobalRComponent } from './AdministrativeCommunication/Globals/transaction-global-r/transaction-global-r.component';
import { TransactionGlobalEComponent } from './AdministrativeCommunication/Globals/transaction-global-e/transaction-global-e.component';
import { TransactionGlobalIComponent } from './AdministrativeCommunication/Globals/transaction-global-i/transaction-global-i.component';
import { MenutrComponent } from './menutr/menutr.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TicketEditComponent } from './Maintenance/ticket-edit/ticket-edit.component';
import { TicketListComponent } from './Maintenance/ticket-list/ticket-list.component';
import { TicketListClientComponent } from './Maintenance/ticket-list-client/ticket-list-client.component';
import { TicketListAgentComponent } from './Maintenance/ticket-list-agent/ticket-list-agent.component';
import { TicketDetailAgentComponent } from './Maintenance/ticket-detail-agent/ticket-detail-agent.component';
import { PageFrwardedToTicketListForAgentCodeComponent } from './Maintenance/page-frwarded-to-ticket-list-for-agent-code/page-frwarded-to-ticket-list-for-agent-code.component';
import { TicketDetailClientComponent } from './Maintenance/ticket-detail-client/ticket-detail-client.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SideMenuComponent,
    LoginPageComponent,
    UserInfoComponent,
    MainTasksComponent,
    NewTaskComponent,
    TasksListComponent,
    TaskDetailsComponent,
    EvaluatedTaskComponent,
    CompletedTaskComponent,
    AlertsComponent,
    MailingComponent,
    UserRegistrationComponent,
    TasksListReceivedComponent,
    TasksListDoneComponent,
    TasksListDelayedComponent,
    TasksListCreatedComponent,
    UsersListComponent,
    TasksReportsComponent,
    TasksReportsReceivedComponent,
    AdministrationListComponent,
    NewAdministrationComponent,
    NewEtablissementComponent,
    EtablissementListComponent,
    UserUpdatingComponent,
    ForbiddenPageComponent,
    TasksUpMenuComponent,
    UserRegisterComponent,
    UserChangePaswordComponent,
    EnregistrerDotationComponent,
    ListeDotationComponent,
    DotationDetailsComponent,
    DotationEditComponent,
    UniteEditComponent,
    UniteDetailsComponent,
    EnregistrerUniteComponent,
    ListeUniteComponent,
    ListeLocataireComponent,
    EditLocataireComponent,
    LocataireDetailsComponent,
    RevenusDetailsComponent,
    RevenusListComponent,
    EnregistrerRevenusComponent,
    EditRevenusComponent,
    EnregistrerLocataireComponent,
    DepotRevenusComponent,
    ServiceRevenusComponent,
    TypedotationComponent,
    EtatdotationComponent,
    EtatuniteComponent,
    TypeuniteComponent,
    MenuFinanceComponent,
    MainFinancePageComponent,
    MainFarametrageFinancePageComponent,
    BureauImmobPageComponent,
    OrganismeComponent,
    ProprietaireComponent,
    EnregistrerTRRecueComponent,
    MyListeTrComponent,
    MyListeTrEmiseComponent,
    EnregistrerTREComponent,
    EnregistrerTRIComponent,
    MyListeTrIComponent,
    MyListeDecisionComponent,
    EnregistrerDecisionComponent,
    ACMenuComponent,
    ListeOrganismeComponent,
    ListeProprietaireComponent,
    MainPageACComponent,
    MainPageAC2Component,
    TransactionsRListComponent,
    EnregDefRComponent,
    EnregTempRComponent,
    EnregRComponent,
    AfftectedToMyAdminRComponent,
    TransactionsElistComponent,
    EnregEComponent,
    AfftectedToMyAdminEComponent,
    EnregTempEComponent,
    EnregDefEComponent,
    RappotEmiseComponent,
    RapportInterneComponent,
    RapportRecueComponent,
    EnregDefIComponent,
    EnregTempIComponent,
    EnregIComponent,
    AffectedToMyAdminIComponent,
    BeneficiaireCComponent,
    TacheEvCComponent,
    OutilsCComponent,
    MediasCComponent,
    ClasseCComponent,
    TblMenuComponent,
    TblMainComponent,
    EventRegisterComponent,
    EventDetailsComponent,
    EventListComponent,
    ActivityCComponent,
    DepenseCComponent,
    DemandeCongeComponent,
    MyListCongeComponent,
    ValidateCongeComponent,
    SuivieCongeComponent,
    PermissionAddComponent,
    PermissionListComponent,
    NomEquipementComponent,
    TypeEquipementComponent,
    EquipementAddComponent,
    EquipementListComponent,
    RecrutementListComponent,
    RecrutementAddComponent,
    EquipementListDirComponent,
    PermissionUListDirComponent,
    MenurequestsComponent,
    NavmenurequestsComponent,
    TicketAddComponent,
    TicketMyLisComponent,
    TicketDirLisComponent,
    SalaialeAddComponent,
    SalaialeMyLisComponent,
    SalaialeDirLisComponent,
    SoldeCongeComponent,
    EmployeeAddComponent,
    EmployeePrivilegesUpdateComponent,
    EmployeePrivilegesAddComponent,
    EmployeeUpdateComponent,
    RecrutmenetDirListComponent,
    MyListRecrutmentComponent,
    RhRecrutmentListComponent,
    RhCongeListComponent,
    NewsDetailComponent,
    NewsAddComponent,
    NewsListViewerComponent,
    NewsListCreatorComponent,
    PrivAddComponent,
    MyPrivListComponent,
    PrivListDirComponent,
    PrivListRhComponent,
    CarsAddComponent,
    CarsListComponent,
    CarsRepairRequestAddComponent,
    CarsRepairRequestListComponent,
    CarsMenuComponent,
    FinanceMenuParamComponent,
    TypeBeneficiaireComponent,
    TypeDepenseComponent,
    BrancheOneComponent,
    BrancheTwoComponent,
    TypeFactureComponent,
    ProjetProgComponent,
    FactureAddComponent,
    FactureListComptableComponent,
    FactureListDirecteurComponent,
    AcceptedFactureComponent,
    MainNotAcceptedComponent,
    MainReadyPayementComponent,
    CreanceFinancireAddComponent,
    CreanceFinancireListComponent,
    MenuReadyPayementComponent,
    MenuNotAcceptedComponent,
    MainAcceptedComponent,
    MaenuAcceptedComponent,
    CreFinanAddComponent,
    CreFinanListEmployeeComponent,
    CreFinanListDirectorComponent,
    CreFinanListAcceptedComponent,
    CreFinanListComptableComponent,
    AvanceAddComponent,
    AvanceListEComponent,
    AvanceListCComponent,
    AvanceListDComponent,
    AvanceListNotAcceptedComponent,
    MainAcceptedAvanceComponent,
    MainNotAcceptedAvanceComponent,
    MainReadyAvanceComponent,
    RecepChequeAddComponent,
    RecepChequeListComponent,
    EventTwoAddComponent,
    EventTwoDetailComponent,
    EventTwoGalleryComponent,
    EventTwoListComponent,
    TypeVoitureComponent,
    OrganismeVoitureComponent,
    DirectorListCarsComponent,
    ComptableListCarsComponent,
    RecueDonsAddComponent,
    RecueDonsListComponent,
    PayementReceptionAddComponent,
    PayementReceptionListComponent,
    DonsReportsComponent,
    ProjDonsComponent,
    RecuEmpDateComponent,
    RecuDateComponent,
    RecuEmpPeriodeComponent,
    RecuProjDateComponent,
    RecuProjPriodComponent,
    RecuNbDateComponent,
    RecuNbPeriodComponent,
    RevenusEmpMonthComponent,
    RevenusMonthComponent,
    RevenusPeriodComponent,
    RevenusEmpPeriodComponent,
    RevenusEmpDateComponent,
    RevenusEmpDateMonthComponent,
    FormationAddComponent,
    FormationListComponent,
    FormationShowComponent,
    SpecialiteComponent,
    MenuFormationComponent,
    CrudEventsTwoComponent,
    CrudNewsComponent,
    MaitenanceRequestAddComponent,
    MaitenanceRequestListComponent,
    MaitenanceRequestMecanicalListComponent,
    MainServicesPageComponent,
    PanneComponent,
    SuppHeureAddComponent,
    SuppHeureListComponent,
    DemandeSuppHeureListComponent,
    DemandeSuppHeureAddComponent,
    DemandeSuppHeureListcreatorComponent,
    DemandeSuppHeureListDirectorComponent,
    MenuSuppHeureComponent,
    EmployeeMaintRequestListComponent,
    NomFileOrgComponent,
    FilesorgAddComponent,
    FilesorgLisComponent,
    FilesorgMenuComponent,
    FilesEmployeeComponent,
    AttestationTravailAddComponent,
    AttestationTravailLisComponent,
    AttestationTravailRhListComponent,
    TransfertInterneAddComponent,
    TransfertInterneShowComponent,
    TransfertInterneListComponent,
    ReceptionEquipementAddComponent,
    ReceptionEquipementListComponent,
    ReceptionEquipementListRhComponent,
    DecisionListComponent,
    SuppEquipementComponent,
    DemandeFormationAddComponent,
    DemandeFormationLisComponent,
    DemandeFormationListRhComponent,
    DemandeFormationListCComponent,
    DemandeFormationListdirComponent,
    DemandeFormationUserAddComponent,
    NewFormationRequestAddComponent,
    NewFormationRequestListComponent,
    MyFormationComponent,
    MyEquipementComponent,
    FormationexistsListdirComponent,
    CreationAddComponent,
    CreationListComponent,
    CreationListRhComponent,
    CreationListDirComponent,
    CreationListDirGComponent,
    FilesCrudEmployeeComponent,
    DotationMenuComponent,
    ProjetAddComponent,
    ProjetListComponent,
    ProjetDetailsComponent,
    ProjetMenuComponent,
    ProjetListingMenuComponent,
    ProjetCompteComponent,
    ProjetOrgSuppComponent,
    ProjetClassComponent,
    ProjetPayActiviteComponent,
    ProjetPayTypeComponent,
    EventEditComponent,
    ProjetEditComponent,
    ProjetAdd2Component,
    ComptesListComponent,
    EtatComptesAddComponent,
    EditEtatCompteComponent,
    EtatCompteSettingsComponent,
    ServiceBanqueAddComponent,
    ServiceBanqueLisComponent,
    MenuCompteComponent,
    MenuSettingsCompteComponent,
    SuppliesAddComponent,
    SuppliesListComponent,
    SuppliesEditComponent,
    ChequecAddComponent,
    ChequecLisComponent,
    ChequecEditComponent,
    ChequecDetailsComponent,
    PayChequecAddComponent,
    PayChequecLisComponent,
    PayChequecDetailComponent,
    PayChequecEditComponent,
    MenuChequeComponent,
    ChequePayListAcceptComponent,
    ChequePayListPayComponent,
    ChequeclasseComponent,
    SalaireAddComponent,
    SalaireMenu1Component,
    SalaireMenu2Component,
    SalaireListGlobalComponent,
    SalaireListDetailsComponent,
    SalaireDetailsComponent,
    GestionSuupliesComponent,
    UserDetailDataComponent,
    UserEditComponent,
    NavUserMenuComponent,
    DemissionAddComponent,
    SalaireReportAddComponent,
    SalaireReportPrintComponent,
    DemissioListComponent,
    DemissioListdirComponent,

    PlaintAddComponent,
    PlaintListComponent,
    PlaintListdirComponent,
    PlaintEditComponent,
    PermoissionEditComponent,
    DemissionEditComponent,
    ResidenceAddComponent,
    ResidenceListComponent,
    ResidenceListDirComponent,
    ExperienceAddComponent,
    ExperiencePrintComponent,
    ResidenceEditComponent,
    LangueEvComponent,
    TacheGlobalDetailsComponent,
    TacheReceivedDetailsComponent,
    TacheARecevoirDetailsComponent,
    LocataireDotAddComponent,
    LocataireDotDetailsComponent,
    LocataireDotEditComponent,
    LocataireDotListComponent,
    NotiftacheComponent,
    TimelinetacheComponent,
    TaskListAdminComponent,
    TaskEditAdminComponent,
    UserRolesEditComponent,
    UserRolesListComponent,
    UserRolesDetailsComponent,
    TasksNotDoneComponent,
    TasksInProgressComponent,
    AddingTransactionsPageComponent,
    TransactionGlobalRComponent,
    TransactionGlobalEComponent,
    TransactionGlobalIComponent,
    MenutrComponent,
    TicketEditComponent,
    TicketListComponent,
    TicketListClientComponent,
    TicketListAgentComponent,
    TicketDetailAgentComponent,
    PageFrwardedToTicketListForAgentCodeComponent,
    TicketDetailClientComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    NgSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxBarcode6Module,
    NgxPaginationModule,
    MatProgressBarModule,
    NgbModule,
    NgxDropzoneModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    }),
    CountdownModule,

    RouterModule.forRoot([
      //{ path: '', redirectTo: '/User/login-page', pathMatch:'full' },
      { path: '', component: LoginPageComponent, pathMatch: 'full' },
     // { path: '', component: UserRegisterComponent, pathMatch: 'full' },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'nav-user-menu', component: NavUserMenuComponent, canActivate: [AuthGuard] },
      { path: 'user-detail-data', component: UserDetailDataComponent, canActivate: [AuthGuard] },
      { path: 'user-detail-data/:id', component: UserDetailDataComponent, canActivate: [AuthGuard] },
      { path: 'user-edit', component: UserEditComponent, canActivate: [AuthGuard] },
      { path: 'user-edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
      { path: 'user-change-pasword', component: UserChangePaswordComponent, canActivate: [AuthGuard] },
      { path: 'tasks-reports', component: TasksReportsComponent, canActivate: [AuthGuard] },
      { path: 'tasks-reports-received', component: TasksReportsReceivedComponent, canActivate: [AuthGuard] },
      { path: 'tasks-list-created', component: TasksListCreatedComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tasks-list-received', component: TasksListReceivedComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tasks-list-done', component: TasksListDoneComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tasks-list-delayed', component: TasksListDelayedComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'user-registration', component: UserRegistrationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE'] }  },
      { path: 'side-menu', component: SideMenuComponent, canActivate: [AuthGuard] },
      { path: 'nav-menu', component: NavMenuComponent, canActivate: [AuthGuard] },
      { path: 'mailing', component: MailingComponent, canActivate: [AuthGuard] },
      { path: 'alerts', component: AlertsComponent, canActivate: [AuthGuard] },
      { path: 'completed-task', component: CompletedTaskComponent, canActivate: [AuthGuard] },
      { path: 'completed-task/:id', component: CompletedTaskComponent, canActivate: [AuthGuard] },
      { path: 'evaluated-task', component: EvaluatedTaskComponent, canActivate: [AuthGuard] },
      { path: 'evaluated-task/:id', component: EvaluatedTaskComponent, canActivate: [AuthGuard] },
      { path: 'task-details/:id', component: TaskDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'task-details', component: TaskDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tasks-list', component: TasksListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'new-task', component: NewTaskComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'main-tasks', component: MainTasksComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE','SECRETAIRE'] } },
      { path: 'user-info', component: UserInfoComponent, canActivate: [AuthGuard]},
      { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'administration-list', component: AdministrationListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'new-administration', component: NewAdministrationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'new-etablissement', component: NewEtablissementComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'etablissement-list', component: EtablissementListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'user-updating', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'user-updating/:id', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'forbidden-page', component: ForbiddenPageComponent },

      //Finanace Project

      { path: 'liste-dotation', component: ListeDotationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }},
      { path: 'dotation-details', component: DotationDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'dotation-edit', component: DotationEditComponent, canActivate: [AuthGuard]    },
      { path: 'unite-edit', component: UniteEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'unite-edit/:id', component: UniteEditComponent, canActivate: [AuthGuard]  },
      { path: 'unite-details', component: UniteDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-unite', component: EnregistrerUniteComponent, canActivate: [AuthGuard]   },
      { path: 'liste-unite', component: ListeUniteComponent, canActivate: [AuthGuard]  },
      { path: 'liste-locataire', component: ListeLocataireComponent, canActivate: [AuthGuard]  },
      { path: 'edit-locataire', component: EditLocataireComponent, canActivate: [AuthGuard]  },
      { path: 'locataire-details', component: LocataireDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'revenus-details', component: RevenusDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }   },
      { path: 'revenus-details/:id', component: RevenusDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'revenus-list', component: RevenusListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enregistrer-revenus', component: EnregistrerRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE'] } },
      { path: 'enregistrer-revenus/:id', component: EnregistrerRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'edit-revenus', component: EditRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enregistrer-locataire', component: EnregistrerLocataireComponent, canActivate: [AuthGuard]  },
      { path: 'depot-revenus', component: DepotRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'service-revenus', component: ServiceRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'typedotation', component: TypedotationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'etatdotation', component: EtatdotationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'etatunite', component: EtatuniteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'enregistrer-dotation', component: EnregistrerDotationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR','SECRETAIRE'] }   },
      { path: 'typeunite', component: TypeuniteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'menu-finance', component: MenuFinanceComponent, canActivate: [AuthGuard]  },
      { path: 'main-finance-page', component: MainFinancePageComponent, canActivate: [AuthGuard]  },
      { path: 'main-farametrage-finance-page', component: MainFarametrageFinancePageComponent, canActivate: [AuthGuard]  },
      { path: 'bureau-immob-page', component: BureauImmobPageComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },


  { path: 'employee-privileges-update', component: EmployeePrivilegesUpdateComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
  { path: 'employee-privileges-add', component: EmployeePrivilegesAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'employee-privileges-add/:id', component: EmployeePrivilegesAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
  { path: 'employee-update', component: EmployeeUpdateComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'employee-update/:id', component: EmployeeUpdateComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'employee-add', component: EmployeeAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },


      //Communication Administrative
      { path: 'organisme', component: OrganismeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }   },
      { path: 'proprietaire', component: ProprietaireComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'enregistrer-tr-recue', component: EnregistrerTRRecueComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'my-liste-tr', component: MyListeTrComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'my-liste-tr-emise', component: MyListeTrEmiseComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enregistrer-tre', component: EnregistrerTREComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }  },
      { path: 'enregistrer-tri', component: EnregistrerTRIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }  },
      { path: 'my-liste-tr-i', component: MyListeTrIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'my-liste-decision', component: MyListeDecisionComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'acmenu', component: ACMenuComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-decision', component: EnregistrerDecisionComponent, canActivate: [AuthGuard]  },
      { path: 'liste-organisme', component: ListeOrganismeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'liste-proprietaire', component: ListeProprietaireComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'main-page-ac', component: MainPageACComponent, canActivate: [AuthGuard] },
      { path: 'main-page-ac2', component: MainPageAC2Component, canActivate: [AuthGuard] },
      { path: 'transactions-rlist', component: TransactionsRListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-def-r', component: EnregDefRComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-temp-r', component: EnregTempRComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-r', component: EnregRComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'afftected-to-my-admin-r', component: AfftectedToMyAdminRComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'transactions-elist', component: TransactionsElistComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-e', component: EnregEComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'afftected-to-my-admin-e', component: AfftectedToMyAdminEComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-temp-e', component: EnregTempEComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-def-e', component: EnregDefEComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'rappot-emise', component: RappotEmiseComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'rapport-interne', component: RapportInterneComponent, canActivate: [AuthGuard] },
      { path: 'rapport-recue', component: RapportRecueComponent, canActivate: [AuthGuard] },

      //{ path: 'user-updating/:id', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'enreg-def-i', component: EnregDefIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }},
      { path: 'enreg-temp-i', component: EnregTempIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'enreg-i', component: EnregIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'affected-to-my-admin-i', component: AffectedToMyAdminIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },


    //Evenement

      { path: 'beneficiaire-c', component: BeneficiaireCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'tache-ev-c', component: TacheEvCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

      { path: 'outils-c', component: OutilsCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'medias-c', component: MediasCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

      { path: 'classe-c', component: ClasseCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

  { path: 'tbl-menu', component: TblMenuComponent, canActivate: [AuthGuard] },

  { path: 'tbl-main', component: TblMainComponent, canActivate: [AuthGuard] },

      { path: 'event-register', component: EventRegisterComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'EMPLOYEE','PARTRESP','DIRECTOR','SECRETAIRE'] }},

      { path: 'event-details', component: EventDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'EMPLOYEE','PARTRESP','DIRECTOR', 'SECRETAIRE', 'RESPFINANCE', 'PARTNORMAL'] } },

      { path: 'event-details/:id', component: EventDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'EMPLOYEE', 'PARTRESP','DIRECTOR', 'SECRETAIRE', 'RESPFINANCE', 'PARTNORMAL'] } },

      { path: 'event-list', component: EventListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'EMPLOYEE', 'DIRECTOR', 'PARTRESP','SECRETAIRE', 'RESPFINANCE','PARTNORMAL'] }},

      { path: 'medias-c/:id', component: MediasCComponent, canActivate: [AuthGuard] },
 
      { path: 'event-edit/:id', component: EventEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'event-edit', component: EventEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'activity-c', component: ActivityCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'depense-c', component: DepenseCComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

      //Ressources Humaines

      { path: 'demande-conge', component: DemandeCongeComponent, canActivate: [AuthGuard] },

      { path: 'my-list-conge', component: MyListCongeComponent, canActivate: [AuthGuard] },

      { path: 'validate-conge', component: ValidateCongeComponent, canActivate: [AuthGuard] },

      { path: 'suivie-conge', component: SuivieCongeComponent, canActivate: [AuthGuard] },


      { path: 'permission-add', component: PermissionAddComponent, canActivate: [AuthGuard] },

      { path: 'permission-list', component: PermissionListComponent, canActivate: [AuthGuard] },

      { path: 'nom-equipement', component: NomEquipementComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'type-equipement', component: TypeEquipementComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'equipement-add', component: EquipementAddComponent, canActivate: [AuthGuard] },

      { path: 'equipement-list', component: EquipementListComponent, canActivate: [AuthGuard] },

      { path: 'recrutement-list', component: RecrutementListComponent, canActivate: [AuthGuard] },

      { path: 'recrutement-add', component: RecrutementAddComponent, canActivate: [AuthGuard] },
 
      { path: 'equipement-list-dir', component: EquipementListDirComponent, canActivate: [AuthGuard] },

      { path: 'permission-list-dir', component: PermissionUListDirComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] } },

      { path: 'menurequests', component: MenurequestsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR','DIRECTORG'] } },

      { path: 'navmenurequests', component: NavmenurequestsComponent, canActivate: [AuthGuard] },



      { path: 'ticket-add', component: TicketAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'ticket-my-lis', component: TicketMyLisComponent, canActivate: [AuthGuard] },

      { path: 'ticket-dir-lis', component: TicketDirLisComponent, canActivate: [AuthGuard] },

      { path: 'salaiale-add', component: SalaialeAddComponent, canActivate: [AuthGuard] },

      { path: 'salaiale-my-lis', component: SalaialeMyLisComponent, canActivate: [AuthGuard] },

      { path: 'salaiale-dir-lis', component: SalaialeDirLisComponent, canActivate: [AuthGuard] },

      { path: 'solde-conge', component: SoldeCongeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'recrutmenet-dir-list', component: RecrutmenetDirListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] }  },

      { path: 'my-list-recrutment', component: MyListRecrutmentComponent, canActivate: [AuthGuard] },

      { path: 'rh-recrutment-list', component: RhRecrutmentListComponent, canActivate: [AuthGuard] },

      { path: 'rh-conge-list', component: RhCongeListComponent, canActivate: [AuthGuard] },

      { path: 'news-detail', component: NewsDetailComponent, canActivate: [AuthGuard] },

      { path: 'news-detail/:id', component: NewsDetailComponent, canActivate: [AuthGuard] },

      { path: 'news-add', component: NewsAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'news-list-viewer', component: NewsListViewerComponent, canActivate: [AuthGuard] },

      { path: 'news-list-creator', component: NewsListCreatorComponent, canActivate: [AuthGuard] },

      { path: 'priv-add', component: PrivAddComponent, canActivate: [AuthGuard] },

      { path: 'my-priv-list', component: MyPrivListComponent, canActivate: [AuthGuard] },

      { path: 'priv-list-dir', component: PrivListDirComponent, canActivate: [AuthGuard] },

      { path: 'priv-list-rh', component: PrivListRhComponent, canActivate: [AuthGuard] },

      { path: 'cars-add', component: CarsAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE','PARTRESP'] }  },

      { path: 'cars-list', component:CarsListComponent, canActivate: [AuthGuard] },

      { path: 'cars-repair-request-add', component: CarsRepairRequestAddComponent, canActivate: [AuthGuard] },

      { path: 'cars-repair-request-list', component: CarsRepairRequestListComponent, canActivate: [AuthGuard] },

      { path: 'cars-menu', component: CarsMenuComponent, canActivate: [AuthGuard] },

      { path: 'type-voiture', component: TypeVoitureComponent, canActivate: [AuthGuard] },

      { path: 'organisme-voiture', component: OrganismeVoitureComponent, canActivate: [AuthGuard] },

      { path: 'director-list-cars', component: DirectorListCarsComponent, canActivate: [AuthGuard] },

      { path: 'comptable-list-cars', component: ComptableListCarsComponent, canActivate: [AuthGuard] },



      /***----Finance------****/

      { path: 'finance-menu-param', component: FinanceMenuParamComponent, canActivate: [AuthGuard] },

      { path: 'type-beneficiaire', component: TypeBeneficiaireComponent, canActivate: [AuthGuard] },

      { path: 'type-depense', component: TypeDepenseComponent, canActivate: [AuthGuard] },

      { path: 'branche-one', component: BrancheOneComponent, canActivate: [AuthGuard] },

      { path: 'branche-two', component: BrancheTwoComponent, canActivate: [AuthGuard] },

      { path: 'type-facture', component: TypeFactureComponent, canActivate: [AuthGuard] },

      { path: 'projet-prog', component: ProjetProgComponent, canActivate: [AuthGuard] },

      { path: 'facture-add', component: FactureAddComponent, canActivate: [AuthGuard] },

      { path: 'facture-list-comptable', component: FactureListComptableComponent, canActivate: [AuthGuard] },

      { path: 'facture-list-directeur', component: FactureListDirecteurComponent, canActivate: [AuthGuard] },
  
      { path: 'accepted-facture', component: AcceptedFactureComponent, canActivate: [AuthGuard] },

      { path: 'main-not-accepted', component: MainNotAcceptedComponent, canActivate: [AuthGuard] },

      { path: 'main-ready-payement', component: MainReadyPayementComponent, canActivate: [AuthGuard] },

      { path: 'creance-financire-add', component: CreanceFinancireAddComponent, canActivate: [AuthGuard] },

      { path: 'creance-financire-list', component: CreanceFinancireListComponent, canActivate: [AuthGuard] },

      { path: 'menu-ready-payement', component: MenuReadyPayementComponent, canActivate: [AuthGuard] },

      { path: 'menu-not-accepted', component: MenuNotAcceptedComponent, canActivate: [AuthGuard] },

      { path: 'main-accepted', component: MainAcceptedComponent, canActivate: [AuthGuard]/*, data: { permittedRoles: ['DIRECTORG'] }*/ },

      { path: 'maenu-accepted', component: MaenuAcceptedComponent, canActivate: [AuthGuard] },

      { path: 'cre-finan-add', component: CreFinanAddComponent, canActivate: [AuthGuard] },

      { path: 'cre-finan-list-employee', component: CreFinanListEmployeeComponent, canActivate: [AuthGuard] },

      { path: 'cre-finan-list-director', component: CreFinanListDirectorComponent, canActivate: [AuthGuard] },

      { path: 'cre-finan-list-accepted', component: CreFinanListAcceptedComponent, canActivate: [AuthGuard] },

      { path: 'cre-finan-list-comptable', component: CreFinanListComptableComponent, canActivate: [AuthGuard] },

      { path: 'avance-add', component: AvanceAddComponent, canActivate: [AuthGuard] },

      { path: 'avance-list-e', component: AvanceListEComponent, canActivate: [AuthGuard] },

      { path: 'avance-list-c', component: AvanceListCComponent, canActivate: [AuthGuard] },

      { path: 'avance-list-d', component: AvanceListDComponent, canActivate: [AuthGuard], data: { permittedRoles: ['DIRECTORG'] }  },

      { path: 'avance-list-not-accepted', component: AvanceListNotAcceptedComponent, canActivate: [AuthGuard] },

      { path: 'recep-cheque-add', component: RecepChequeAddComponent, canActivate: [AuthGuard] },

      { path: 'recep-cheque-list', component: RecepChequeListComponent, canActivate: [AuthGuard] },


                           /********** Events Two***********/

      { path: 'event-two-add', component: EventTwoAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'event-two-detail', component: EventTwoDetailComponent, canActivate: [AuthGuard] },

      { path: 'event-two-detail/:id', component: EventTwoDetailComponent, canActivate: [AuthGuard] },

      { path: 'event-two-gallery', component: EventTwoGalleryComponent, canActivate: [AuthGuard] },

      { path: 'event-two-gallery/:id', component: EventTwoGalleryComponent, canActivate: [AuthGuard] },

      { path: 'event-two-list', component: EventTwoListComponent, canActivate: [AuthGuard] },

      { path: 'crud-events-two', component: CrudEventsTwoComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'crud-news', component: CrudNewsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
 


                           /***********  Dons Pages   ***********/
      { path: 'recue-dons-add', component: RecueDonsAddComponent, canActivate: [AuthGuard] },

      { path: 'recue-dons-list', component: RecueDonsListComponent, canActivate: [AuthGuard] },

      { path: 'payement-reception-add', component: PayementReceptionAddComponent, canActivate: [AuthGuard] },

      { path: 'payement-reception-list', component: PayementReceptionListComponent, canActivate: [AuthGuard] },
      
      { path: 'proj-dons', component: ProjDonsComponent, canActivate: [AuthGuard] },

      { path: 'dons-reports', component: DonsReportsComponent, canActivate: [AuthGuard] },

                           /************* Reports ********************/
 
        { path: 'dotation-menu', component: DotationMenuComponent, canActivate: [AuthGuard] },
      { path: 'recu-emp-date', component: RecuEmpDateComponent, canActivate: [AuthGuard] },

      { path: 'revenus-emp-date-month', component: RevenusEmpDateMonthComponent, canActivate: [AuthGuard] },

      { path: 'revenus-emp-date', component: RevenusEmpDateComponent, canActivate: [AuthGuard] },

      { path: 'recu-date', component: RecuDateComponent, canActivate: [AuthGuard] },

      { path: 'recu-emp-periode', component: RecuEmpPeriodeComponent, canActivate: [AuthGuard] },

      { path: 'recu-proj-date', component: RecuProjDateComponent, canActivate: [AuthGuard] },

      { path: 'recu-proj-priod', component: RecuProjPriodComponent, canActivate: [AuthGuard] },

      { path: 'recu-nb-date', component: RecuNbDateComponent, canActivate: [AuthGuard] },

      { path: 'recu-nb-period', component: RecuNbPeriodComponent, canActivate: [AuthGuard] },

      { path: 'revenus-emp-month', component: RevenusEmpMonthComponent, canActivate: [AuthGuard] },

      { path: 'revenus-month', component: RevenusMonthComponent, canActivate: [AuthGuard] },

      { path: 'revenus-period', component: RevenusPeriodComponent, canActivate: [AuthGuard] },

      { path: 'revenus-emp-period', component: RevenusEmpPeriodComponent, canActivate: [AuthGuard] },

  
                 /**********************   Formation   ***************************/
   
      { path: 'formation-add', component: FormationAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'formation-list', component: FormationListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

      { path: 'formation-show', component: FormationShowComponent, canActivate: [AuthGuard] },

      { path: 'specialite', component: SpecialiteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'menu-formation', component: MenuFormationComponent, canActivate: [AuthGuard] },

      { path: 'demande-formation-add', component: DemandeFormationAddComponent, canActivate: [AuthGuard] },

      { path: 'demande-formation-add/:id', component: DemandeFormationAddComponent, canActivate: [AuthGuard] },

      { path: 'demande-formation-lis', component: DemandeFormationLisComponent, canActivate: [AuthGuard] },

      { path: 'demande-formation-list-rh', component: DemandeFormationListRhComponent, canActivate: [AuthGuard] },

      { path: 'demande-formation-list-c', component: DemandeFormationListCComponent, canActivate: [AuthGuard] },

      { path: 'demande-formation-listdir', component: DemandeFormationListdirComponent, canActivate: [AuthGuard] },

      { path: 'new-formation-request-add', component: NewFormationRequestAddComponent, canActivate: [AuthGuard] },

      { path: 'new-formation-request-list', component: NewFormationRequestListComponent , canActivate: [AuthGuard] },

      { path: 'my-formation', component: MyFormationComponent, canActivate: [AuthGuard] },

      { path: 'my-equipement', component: MyEquipementComponent, canActivate: [AuthGuard] },

      { path: 'formationexists-listdir', component: FormationexistsListdirComponent , canActivate: [AuthGuard] },


                   /**************  Services ******************/

      { path: 'maitenance-request-add', component: MaitenanceRequestAddComponent, canActivate: [AuthGuard] },

      { path: 'maitenance-request-list', component: MaitenanceRequestListComponent, canActivate: [AuthGuard] },

      { path: 'maitenance-request-mecanical-list', component: MaitenanceRequestMecanicalListComponent, canActivate: [AuthGuard] },

      { path: 'main-services-page', component: MainServicesPageComponent, canActivate: [AuthGuard] },

      { path: 'employee-maint-request-list', component: EmployeeMaintRequestListComponent, canActivate: [AuthGuard] },

      { path: 'panne', component: PanneComponent, canActivate: [AuthGuard] },

                     /************* Supp Heure *************/

      { path: 'supp-heure-add', component: SuppHeureAddComponent, canActivate: [AuthGuard] },

      { path: 'supp-heure-list', component: SuppHeureListComponent, canActivate: [AuthGuard] },

      { path: 'demande-supp-heure-list', component: DemandeSuppHeureListComponent, canActivate: [AuthGuard] },

      { path: 'demande-supp-heure-add', component: DemandeSuppHeureAddComponent, canActivate: [AuthGuard] },

      { path: 'demande-supp-heure-listcreator', component: DemandeSuppHeureListcreatorComponent, canActivate: [AuthGuard] },

      { path: 'demande-supp-heure-list-director', component: DemandeSuppHeureListDirectorComponent, canActivate: [AuthGuard] },
      { path: 'demande-formation-user-add', component: DemandeFormationUserAddComponent, canActivate: [AuthGuard] },
     


      { path: 'menu-supp-heure', component: MenuSuppHeureComponent, canActivate: [AuthGuard] },

                   /************** Files Ogr ****************/
 
      { path: 'nom-file-org', component: NomFileOrgComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'filesorg-add', component: FilesorgAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'filesorg-lis', component: FilesorgLisComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'filesorg-menu', component: FilesorgMenuComponent, canActivate: [AuthGuard] },

      { path: 'files-employee', component: FilesEmployeeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

               /****************** Attestation Travail ****************/

      { path: 'attestation-travail-add', component: AttestationTravailAddComponent, canActivate: [AuthGuard] },

      { path: 'attestation-travail-lis', component: AttestationTravailLisComponent, canActivate: [AuthGuard] },

      { path: 'attestation-travail-rh-list', component: AttestationTravailRhListComponent, canActivate: [AuthGuard] },

                /***************** Transfert Interne *********************/

      { path: 'transfert-interne-add', component: TransfertInterneAddComponent, canActivate: [AuthGuard] },

      { path: 'transfert-interne-show', component: TransfertInterneShowComponent, canActivate: [AuthGuard] },

      { path: 'transfert-interne-list', component: TransfertInterneListComponent, canActivate: [AuthGuard] },

                    /************* Reception Equipement ***********/

      { path: 'reception-equipement-add', component: ReceptionEquipementAddComponent, canActivate: [AuthGuard] },
      { path: 'supp-equipement', component: SuppEquipementComponent, canActivate: [AuthGuard] },

      { path: 'reception-equipement-list', component: ReceptionEquipementListComponent, canActivate: [AuthGuard] },

      { path: 'reception-equipement-list-rh', component: ReceptionEquipementListRhComponent, canActivate: [AuthGuard] },
      { path: 'decision-list', component: DecisionListComponent, canActivate: [AuthGuard] },

    /***********   Creation Travail **************/

      { path: 'creation-add', component: CreationAddComponent, canActivate: [AuthGuard] },

      { path: 'creation-list', component: CreationListComponent, canActivate: [AuthGuard] },

      { path: 'creation-list-rh', component: CreationListRhComponent, canActivate: [AuthGuard] },

      { path: 'creation-list-dir', component: CreationListDirComponent, canActivate: [AuthGuard] },

      { path: 'creation-list-dir-g', component: CreationListDirGComponent, canActivate: [AuthGuard] },

      { path: 'files-crud-employee', component: FilesCrudEmployeeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },


    /************************* Projet ************************/
      { path: 'projet-add', component: ProjetAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'projet-add2', component: ProjetAdd2Component, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'SECRETAIRE', 'DIRECTORG', 'DIRECTOR', 'EMPLOYEE', 'PARTRESP'] }  },

      { path: 'projet-list', component: ProjetListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE', 'EMPLOYEE'] } },

      { path: 'projet-details', component: ProjetDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE','EMPLOYEE'] }},

      { path: 'projet-details/:id', component: ProjetDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'projet-edit', component: ProjetEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'projet-edit/:id', component: ProjetEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },

      { path: 'projet-menu', component: ProjetMenuComponent, canActivate: [AuthGuard] },

      { path: 'projet-listing-menu', component: ProjetListingMenuComponent, canActivate: [AuthGuard] },

  { path: 'projet-compte', component: ProjetCompteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'projet-org-supp', component: ProjetOrgSuppComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

      { path: 'projet-class', component: ProjetClassComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'projet-pay-activite', component: ProjetPayActiviteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'projet-pay-type', component: ProjetPayTypeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

    /******** Finance2 **************/

      { path: 'comptes-list', component: ComptesListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'etat-comptes-add', component: EtatComptesAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE', 'PARTRESP'] } },

      { path: 'edit-etat-compte', component: EditEtatCompteComponent, canActivate: [AuthGuard] },

  { path: 'etat-compte-settings', component: EtatCompteSettingsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},

      { path: 'service-banque-add', component: ServiceBanqueAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE','PARTRESP'] }  },

      { path: 'service-banque-lis', component: ServiceBanqueLisComponent, canActivate: [AuthGuard] },

      { path: 'menu-compte', component: MenuCompteComponent, canActivate: [AuthGuard] },

      { path: 'menu-settings-compte', component: MenuSettingsCompteComponent, canActivate: [AuthGuard],data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'menu-settings-compte/:id', component: MenuSettingsCompteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },



    /*************   Suplies And Cars  *****************/
      { path: 'supplies-add', component: SuppliesAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE','PARTRESP'] }  },

      { path: 'supplies-list', component: SuppliesListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'gestion-suuplies', component: GestionSuupliesComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'supplies-edit', component: SuppliesEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }},
      { path: 'supplies-edit/:id', component: SuppliesEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

    /************************ Cheques ****************************/

      { path: 'chequec-add', component: ChequecAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE','PARTRESP'] } },

      { path: 'chequec-lis', component: ChequecLisComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'chequec-edit', component: ChequecEditComponent, canActivate: [AuthGuard] },
      { path: 'chequec-edit/:id', component: ChequecEditComponent, canActivate: [AuthGuard]},

      { path: 'chequec-details', component: ChequecDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'chequec-details/:id', component: ChequecDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }},

      { path: 'pay-chequec-add', component: PayChequecAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE','PARTRESP'] }  },

      { path: 'pay-chequec-lis', component: PayChequecLisComponent, canActivate: [AuthGuard] },

      { path: 'pay-chequec-detail', component: PayChequecDetailComponent, canActivate: [AuthGuard] },

      { path: 'pay-chequec-detail/:id', component: PayChequecDetailComponent, canActivate: [AuthGuard] },

      { path: 'pay-chequec-edit', component: PayChequecEditComponent, canActivate: [AuthGuard] },
      { path: 'pay-chequec-edit/:id', component: PayChequecEditComponent, canActivate: [AuthGuard] },

      { path: 'menu-cheque', component: MenuChequeComponent, canActivate: [AuthGuard] },

      { path: 'cheque-pay-list-accept', component: ChequePayListAcceptComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG','RESP'] } },

      { path: 'cheque-pay-list-pay', component: ChequePayListPayComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'RESPFINANCE', 'DIRECTORG'] } },

  { path: 'chequeclasse', component: ChequeclasseComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},


    /******** Salaire *****************/

      { path: 'salaire-add', component: SalaireAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'DIRECTOR', 'SECRETAIRE','PARTRESP'] } },

      { path: 'salaire-menu1', component: SalaireMenu1Component, canActivate: [AuthGuard] },

      { path: 'salaire-menu2', component: SalaireMenu2Component, canActivate: [AuthGuard] },

      { path: 'salaire-list-details/:mois', component: SalaireListDetailsComponent, canActivate: [AuthGuard] },

      { path: 'salaire-list-global', component: SalaireListGlobalComponent, canActivate: [AuthGuard] },

      { path: 'salaire-details', component: SalaireDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'salaire-details/:id', component: SalaireDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

    /********* User Service Part 2  ***********/

      { path: 'demission-add', component: DemissionAddComponent, canActivate: [AuthGuard] },

      { path: 'salaire-report-add', component: SalaireReportAddComponent, canActivate: [AuthGuard] },

      { path: 'salaire-report-print', component: SalaireReportPrintComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] }  },

      { path: 'demissio-list', component: DemissioListComponent, canActivate: [AuthGuard] },

      { path: 'demissio-listdir', component: DemissioListdirComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] }  },

    

      { path: 'plaint-add', component: PlaintAddComponent, canActivate: [AuthGuard] },

      { path: 'plaint-list', component: PlaintListComponent, canActivate: [AuthGuard] },

      { path: 'plaint-listdir', component: PlaintListdirComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] }  },

      { path: 'plaint-edit', component: PlaintEditComponent, canActivate: [AuthGuard] },

      { path: 'plaint-edit/:id', component: PlaintEditComponent, canActivate: [AuthGuard] },

      { path: 'permoission-edit', component: PermoissionEditComponent, canActivate: [AuthGuard] },

      { path: 'permoission-edit/:id', component: PermoissionEditComponent, canActivate: [AuthGuard] },

      { path: 'demission-edit', component: DemissionEditComponent, canActivate: [AuthGuard] },

      { path: 'demission-edit/:id', component: DemissionEditComponent, canActivate: [AuthGuard] },
 
      { path: 'residence-add', component: ResidenceAddComponent, canActivate: [AuthGuard] },

      { path: 'residence-list', component: ResidenceListComponent, canActivate: [AuthGuard] },
      { path: 'residence-edit', component: ResidenceEditComponent, canActivate: [AuthGuard] },
      { path: 'residence-edit/:id', component: ResidenceEditComponent, canActivate: [AuthGuard] },

      { path: 'residence-list-dir', component: ResidenceListDirComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] }  },

      { path: 'experience-add', component: ExperienceAddComponent, canActivate: [AuthGuard] },

      { path: 'experience-print', component: ExperiencePrintComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG'] }  },

      { path: 'langue-ev', component: LangueEvComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'tache-global-details', component: TacheGlobalDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }},
      { path: 'tache-global-details/:id', component: TacheGlobalDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tache-received-details', component: TacheReceivedDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tache-received-details/:id', component: TacheReceivedDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'tache-arecevoir-details', component: TacheARecevoirDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },
      { path: 'tache-arecevoir-details/:id', component: TacheARecevoirDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },


      //locataire 2

      { path: 'locataire-dot-add', component: LocataireDotAddComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'RESP', 'SECRETAIRE'] }},

      { path: 'locataire-dot-details', component: LocataireDotDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] }},

      { path: 'locataire-dot-details/:id', component: LocataireDotDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'locataire-dot-edit', component: LocataireDotEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'locataire-dot-edit/:id', component: LocataireDotEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'locataire-dot-list', component: LocataireDotListComponent, canActivate: [AuthGuard] },

      //Task 2

      { path: 'notiftache', component: NotiftacheComponent, canActivate: [AuthGuard] },

      { path: 'timelinetache', component: TimelinetacheComponent, canActivate: [AuthGuard] },

      { path: 'timelinetache/:id', component: TimelinetacheComponent, canActivate: [AuthGuard] },

      { path: 'task-list-admin', component: TaskListAdminComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },

      { path: 'task-edit-admin', component: TaskEditAdminComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'task-edit-admin/:id', component: TaskEditAdminComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'user-roles-list', component: UserRolesListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'user-roles-details', component: UserRolesDetailsComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'user-roles-edit', component: UserRolesEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'user-roles-edit/:id', component: UserRolesEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'tasks-in-progress', component: TasksInProgressComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'tasks-not-done', component: TasksNotDoneComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'EMPLOYEE', 'DIRECTORG', 'CONSEILADMIN', 'SUPCONSEILADMIN', 'DIRECTOR', 'PARTRESP', 'PARTNORMAL', 'RESP', 'RESPFINANCE', 'SECRETAIRE'] } },

      { path: 'adding-transactions-page', component: AddingTransactionsPageComponent, canActivate: [AuthGuard] },

      { path: 'transaction-global-r', component: TransactionGlobalRComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'PARTNORMAL', 'RESPFINANCE'] } },

      { path: 'transaction-global-e', component: TransactionGlobalEComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'PARTNORMAL', 'RESPFINANCE'] } },

      { path: 'transaction-global-i', component: TransactionGlobalIComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR', 'PARTNORMAL', 'RESPFINANCE'] } },

      {path: 'menutr', component: MenutrComponent , canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR','PARTNORMAL','RESPFINANCE'] } },


    /****** Maintenance ******* */
      { path: 'ticket-edit', component: TicketEditComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'ticket-list', component: TicketListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'ticket-list-client', component: TicketListClientComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

      { path: 'ticket-list-agent', component: TicketListAgentComponent },

      { path: 'ticket-detail-agent', component: TicketDetailAgentComponent },

      { path: 'page-frwarded-to-ticket-list-for-agent-code', component: PageFrwardedToTicketListForAgentCodeComponent },

      { path: 'ticket-detail-client', component: TicketDetailClientComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },



    ])
  ],/*,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ,*/
  providers: [UserServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    EvaluationService,
    PrivilegesService,
    CommentaireService,
    EtablissementService,
    AdministrationService,
    TypeDotationService,
    EtatDotationService,
    AgenceImmobService,
    TypeUniteService,
    EtatUniteService,
    ServiceRevenusService,
    UniteService,
    LocataireService,
    DepotRevenusService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
