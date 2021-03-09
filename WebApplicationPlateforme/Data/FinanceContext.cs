﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplicationPlateforme.Model.Dotations;
using WebApplicationPlateforme.Model.Global;
using WebApplicationPlateforme.Model.Taches;
using WebApplicationPlateforme.Model.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationPlateforme.Model.AdministrativeCommunication;
using WebApplicationPlateforme.Model.AdministrativeCommunication.Interne;
using WebApplicationPlateforme.Model.AdministrativeCommunication.Emise;
using WebApplicationPlateforme.Model.AdministrativeCommunication.Decision;
using WebApplicationPlateforme.Model.Evenements;
using WebApplicationPlateforme.Model.Ressource_Humaines;
using WebApplicationPlateforme.Model.News;
using WebApplicationPlateforme.Model.voitures;
using WebApplicationPlateforme.Model.Finance;
using WebApplicationPlateforme.Model.Evenement2;
using WebApplicationPlateforme.Model.Dons;
using WebApplicationPlateforme.Model.ServiceRh;
using WebApplicationPlateforme.Model.Projets;
using WebApplicationPlateforme.Model.FinancePartTwo.Comptes;
using WebApplicationPlateforme.Model.Supplies;
using WebApplicationPlateforme.Model.FinancePartTwo.Cheques;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Identity;
using WebApplicationPlateforme.Model.Salaire;
using WebApplicationPlateforme.Model.User_Services;
using WebApplicationPlateforme.Model.Maintenance;
using WebApplicationPlateforme.Model;

namespace WebApplicationPlateforme.Data
{
    public class FinanceContext : IdentityDbContext
    {
        public FinanceContext(DbContextOptions<FinanceContext> options) : base(options) { }
        public DbSet<dotation> dotations { get; set; }
        public DbSet<unite> unites { get; set; }
        public DbSet<locataire> locataires { get; set; }
        public DbSet<revenus> revenus { get; set; }
        public DbSet<piecesjointesLocataire> piecesjointesLocataires { get; set; }
        public DbSet<piecesjointesRevenus> PiecesjointesRevenus { get; set; }
        public DbSet<depotRevenus> depotRevenus { get; set; }
        public DbSet<servicesRevenus> servicesRevenus { get; set; }
        public DbSet<typeDotation> typeDotations { get; set; }
        public DbSet<typeUnite> typeUnites { get; set; }
        public DbSet<etatDotation> etatDotations { get; set; }
        public DbSet<etatUnite> etatUnites { get; set; }
        public DbSet<agenceImmob> agenceImmobs { get; set; }
        public DbSet<locationUnite> locationUnites { get; set; }

        public DbSet<Privileges> privileges { get; set; }
        public DbSet<contratLocation> contratLocations { get; set; }
        public DbSet<LesServices> lesServices { get; set; }
        public DbSet<Proprietaire> proprietaires { get; set; }
        public DbSet<Organisme> organismes { get; set; }
        public DbSet<Liaison> liaisons { get; set; }
        public DbSet<LiaisonI> liaisonsI { get; set; }
        //public DbSet<LiaisonD> liaisonsD { get; set; }
        public DbSet<LiaisonE> liaisonsE { get; set; }

        public DbSet<Transaction> transactions { get; set; }
        //public DbSet<Decision> decisions { get; set; }
        public DbSet<TransactionI> transactionsI { get; set; }
        public DbSet<TransactionEmise> transactionsEmise { get; set; }
       
        public DbSet<PiecesJointesAffected> piecesJointesAffecteds { get; set; }
        
        public DbSet<PiecesJointesTr> piecesJointesTrs { get; set; }
        //public DbSet<PiecesJointesD> piecesJointesDs { get; set; }
        public DbSet<PiecesJointesI> piecesJointesIs { get; set; }
        public DbSet<PiecesJointeE> piecesJointeEs { get; set; }
        
        public DbSet<TrAffectation> trAffectations { get; set; }
        public DbSet<TeAffectation> TeAffectations { get; set; }
        public DbSet<TiAffectation> tiAffectations { get; set; }
       // public DbSet<TdAffectation> tdAffectations { get; set; }
        
        public DbSet<Receptioncs> receptioncs { get; set; }
       // public DbSet<ReceptionD> receptionDs { get; set; }
        public DbSet<ReceptionE> receptionEs { get; set; }
        public DbSet<ReceptionI> receptionIs { get; set; }


        //Event
        public DbSet<Evenement> evenements { get; set; }
        public DbSet<Participation> participations { get; set; }
        public DbSet<DepensesEv> depensesEvs { get; set; }
        public DbSet<Beneficiaire> beneficiaires { get; set; }
        public DbSet<TacheEv> tacheEvs { get; set; }
        public DbSet<OutilsEv> outilsEvs { get; set; }
        public DbSet<MediasEv> mediasEvs { get; set; }
        public DbSet<ClasseEv> classeEvs { get; set; }
        public DbSet<PiecesJointesEvents> piecesJointesEvents { get; set; }
        public DbSet<ActivityEv> activityEvs { get; set; }


        //Ressource Humaine 

        public DbSet<Conge> conges { get; set; }
        public DbSet<Recrutement> recrutements { get; set; }
        public DbSet<PiecesJointesRc> piecesJointesRcs { get; set; }
        public DbSet<Permission> permissions { get; set; }
        public DbSet<editingUser> editingUsers { get; set; }
        public DbSet<Equipement> equipements { get; set; }
        public DbSet<typeEquipement> typeEquipements { get; set; }
        public DbSet<nomEquipement> nomEquipements { get; set; }

        public DbSet<DemandeTicket> demandeTickets { get; set; }
        public DbSet<DemandeSalariale> demandeSalariales { get; set; }
        public DbSet<PiecesJointesDt> PiecesJointesDts { get; set; }
        public DbSet<SoldeConge> soldeConges { get; set; }
        public DbSet<Newsi> newsi { get; set; }
        public DbSet<voiture> voitures { get; set; }
        
        public DbSet<voitureRepair> voitureRepairs { get; set; }
        public DbSet<PrivelegesRequests> privelegesRequests { get; set; }

        /*Finance */
        public DbSet<PiecesJointesCf> piecesJointesCfs { get; set; }
        public DbSet<PiecesJointesf> piecesJointesfs { get; set; }
        public DbSet<CreanceFinanciere> creanceFinancieres { get; set; }
        public DbSet<Facture> factures { get; set; }
        public DbSet<DepensesExploitation> depensesExploitations { get; set; }
        public DbSet<TypeBeneficiaire> typeBeneficiaires { get; set; }
        public DbSet<TypeDepense> typeDepenses{ get; set; }
        public DbSet<BrancheOne> brancheOnes { get; set; }

        public DbSet<BrancheTwo> brancheTwos { get; set; }
        public DbSet<TypeFacture> typeFactures { get; set; }
        public DbSet<ProjetProg> projetProgs { get; set; }
        public DbSet<DemandeAvance> demandeAvances { get; set; }
        public DbSet<EvenementTwo> evenementTwos { get; set; }
        public DbSet<PiecesJointesEvTzo> piecesJointesEvTzos { get; set; }
        public DbSet<ChequeReception> chequeReceptions { get; set; }
        public DbSet<PiecesJointesReceptionC> piecesJointesReceptionCs { get; set; }

        public DbSet<OrganismeVoiture> organismeVoitures { get; set; }
        public DbSet<TypeVoiture> typeVoitures { get; set; }
        public DbSet<NotifCars> notifCars { get; set; }

        //Dons
        public DbSet<Doneur> doneurs { get; set; }
        public DbSet<RecueDons> recueDons { get; set; }
        public DbSet<ProjetDons> projetDons { get; set; }
        public DbSet<PayemeentReception> payemeentReceptions { get; set; }

        //Service rh 

        public DbSet<Formation> formations { get; set; }
        public DbSet<Specialite> specialites { get; set; }
        public DbSet<DemandeFormation> demandeFormations { get; set; }
        public DbSet<DecisionTwo> decisionTwos  { get; set; }
        public DbSet<TransfertInterne> transfertInternes { get; set; }
        public DbSet<DemandeAttestationTravail> demandeAttestationTravails { get; set; }
        public DbSet<MaintenanceRequest> maintenanceRequests { get; set; }
        public DbSet<Panne> pannes  { get; set; }
        public DbSet<CreationTravailDemande> creationTravailDemandes  { get; set; }
        public DbSet<SupHeure> supHeures { get; set; }
        public DbSet<DemandeSupHeure> demandeSupHeures { get; set; }
        public DbSet<FilesUserContrat> filesUserContrats { get; set; }
        public DbSet<FilesUserCin> filesUserCins { get; set; }
        public DbSet<FilesUserPasseport> filesUserPasseports { get; set; }
        public DbSet<ReceptionEquipement> receptionEquipements { get; set; }
        public DbSet<FilesOrg> filesOrgs  { get; set; }
        public DbSet<NomFiles> nomFiles { get; set; }
        public DbSet<SuppEquipement> suppEquipements { get; set; }
        public DbSet<newFormationRequest> newFormationRequests { get; set; }

        /** Edit for Abo Areesh**/

        public DbSet<BeneficiaireEvent> beneficiaireEvents { get; set; }
        public DbSet<DepenseEvent> depenseEvents { get; set; }
        public DbSet<OutilsEvent> outilsEvents { get; set; }


        /****** Projet ****/
        public DbSet<ClassProjet> classProjets { get; set; }
        public DbSet<OrganismeSupp>  organismeSupps { get; set; }
        public DbSet<Projet> Projets { get; set; }
        public DbSet<PayementProjet> payementProjets { get; set; }
        public DbSet<PayementActivite> payementActivites { get; set; }
        public DbSet<PayementType> payementTypes { get; set; }
        public DbSet<FilesProjet> filesProjets  { get; set; }
        public DbSet<RapportProjet> rapportProjets { get; set; }
        public DbSet<Compte> comptes { get; set; }
        public DbSet<ButProjet> butProjets { get; set; }


        /*******  Finance 2 *******/
        public DbSet<EtatCompte> etatComptes { get; set; }
        public DbSet<EtatListCompte> etatListComptes { get; set; }
        public DbSet<FilesEtatCompte> filesEtatComptes { get; set; }
        public DbSet<ServiceBanque> serviceBanques { get; set; }

        /******** Equipement et Voitures ****** */

        public DbSet<Supplie> supplies { get; set; }
        public DbSet<FilesSupplie> filesSupplies { get; set; }
        public DbSet<FilesVoiture> filesVoitures { get; set; }
        public DbSet<GestionSupplies> gestionSupplies { get; set; }

        /******************** Cheque ********************/

        public DbSet<ChequeC> chequeCs { get; set; }
        public DbSet<PayCheque> payCheques { get; set; }
        public DbSet<FilesPayCheque> filesPays { get; set; }
        public DbSet<FilesCheque> filesCheques { get; set; }
        public DbSet<DemandePayCheque> demandePayCheques { get; set; }
        public DbSet<ArticlePayCheque> articlePayCheques  { get; set; }
        public DbSet<ChequeClasse> ChequeClasses  { get; set; }

        /******Salaire ***** */
        public DbSet<SalaireD> salaires  { get; set; }

        /*************** Services User ******/
        public DbSet<Plaint> plaints { get; set; }
        public DbSet<FilesPlaint> filesPlaints { get; set; }
        public DbSet<Demission> demissions { get; set; }
        public DbSet<PermissionU> permissionUs { get; set; }
        public DbSet<Residence> residences { get; set; }
        public DbSet<langueEv> langueEvs { get; set; }


        /****** Localion ******/

        public DbSet<locataireDot> locataireDot { get; set; }
        public DbSet<PiecesJointesDotLoc> PiecesJointesDotLoc { get; set; }


        /********** Task 2 ***/


        public DbSet<ProcessTache> processTaches { get; set; }
        public DbSet<Notiftache> notiftaches { get; set; }

        /**********************/

        public DbSet<EntrerDansIslam> entrerDansIslams { get; set; }


        /****** Maintenance ********/

        public DbSet<Ticket> tickets { get; set; }
        public DbSet<FilesTickets> filesTickets { get; set; }


        /*********** Demande Pay Cheque ***************/

        public DbSet<DemPayCheqNotif> demPayCheqNotifs { get; set; }
        public DbSet<ActionOnDemPayCheq> actionOnDemPayCheqs { get; set; }

        /************* Chat Partie ************/ 

        public DbSet<ChatModel> chatModels { get; set; }
    }
}
