import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute} from '@angular/router';
import { InscriptionComponent } from 'src/app/components/inscription/inscription.component';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  panier: any[] = [];
  plats: any[] = [];
  error: string | null = null;
  client:any;
  clientId: string = '';
  nom: string = '';
  prenom: string = '';
  

  constructor(public globalService: GlobalService,
    private router:Router, 
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalController: ModalController) { }

  ngOnInit() {
    this.panier = this.globalService.panier;
    this.client = this.globalService.getClient();
    console.log('Client from service:', this.client);
  }

  // this.clientId = this.route.snapshot.paramMap.get('client')!;
  //   this.nom = this.route.snapshot.paramMap.get('nom')!;
  //   this.prenom = this.route.snapshot.paramMap.get('prenom')!;

  
    
  

  enleverDuPanier(item: any) {
    // this.globalService.enleverDuPanier(item);
    this.panier = this.globalService.panier;
  }
  deleteItem() {
    window.location.reload();
  }

  addQuantity(item: any) {
    item.quantity++; // Ajoute 1 à la quantité de l'article
    if (item.quantity >= 1) {
      this.globalService.ajouterAuPanier(item, item.quantity);
    }
  }
  
  removeQuantity(item: any) {
    if (item.quantity >= 0) {
      item.quantity--; // Décrémente la quantité de l'article
      if (item.quantity === 0) {
        // Si la quantité atteint 0, supprime l'article du panier
        this.globalService.enleverDuPanier(item, item.quantity); // Supprime l'article du panier
      } else {
        // Si la quantité est supérieure à 0, met à jour la quantité dans le panier
        this.globalService.enleverDuPanier(item, item.quantity); // Met à jour la quantité dans le panier
      }
    }
  }

 
  

  async createOrder() {
    const articles = this.panier
      .filter(panierItem => panierItem.quantite > 0)
      .map(panierItem => ({
        produit_id: panierItem.item.id,
        quantite: panierItem.quantite
      }));

    if (articles.length === 0) {
      this.error = 'Aucun article sélectionné pour la commande.';
      return;
    }

    if (this.client) {
      const orderData = {
        libelle: 'Nouvelle commande',
        statut: 'en cours',
        user_id:this.client,
        articles: articles
      };

      this.globalService.createOrder(orderData).subscribe(
        (response) => {
          console.log('Commande créée avec succès', response);
          // Reset panier or perform other success actions
          this.globalService.resetPanier();
          this.globalService.setSuccessMessage('Commande validée avec succès !');
            // Rediriger vers la page d'accueil avec le paramètre client dans la route
            this.router.navigate(['/home', this.client]);
        },
        (error) => {
          this.error = error;
          console.error('Erreur lors de la création de la commande', error);
        }
      );
    } else {
      const modal = await this.modalController.create({
        component: InscriptionComponent,
        componentProps: { client: this.client } // Passez des propriétés si nécessaire
      });
      await modal.present();
    }
  }

 
}
