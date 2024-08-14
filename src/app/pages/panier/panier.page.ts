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
  clientId: string | null = null;
  clientName: string | null = null;
  clientPrenom: string | null = null;

  

  constructor(public globalService: GlobalService,
    private router:Router, 
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalController: ModalController) { }

  ngOnInit() {
    this.panier = this.globalService.panier;
  console.log(this.route.snapshot.paramMap)
  this.client = this.route.snapshot.paramMap.get('client');
  if (this.client) {
    console.log('Client ID in Panier:', this.client);
  } else {
    console.log('No client ID in Panier');
  }


  this.route.queryParams.subscribe(params => {
    this.clientId = params['id'] || null;
    this.clientName = params['nom'] || null;
    this.clientPrenom = params['prenom'] || null;
  });
}
  
    
  

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
          this.router.navigate(['/home']);
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
