import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  panier: any[] = [];
  plats: any[] = [];
  error: string | null = null;

  constructor(public globalService: GlobalService,private navCtrl: NavController) { }

  ngOnInit() {
    this.panier = this.globalService.panier;
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

  createOrder() {
    const articles = this.panier
      .filter(panierItem => panierItem.quantite > 0) // Filtrer les plats avec une quantité > 0
      .map(panierItem => ({
        produit_id: panierItem.item.id,
        quantite: panierItem.quantite
      }));

    if (articles.length === 0) {
      this.error = 'Aucun article sélectionné pour la commande.';
      return;
    }

    const orderData = {
      libelle: 'Nouvelle commande',
      statut: 'en cours',
      
      articles: articles
    };

    this.globalService.createOrder(orderData).subscribe(
      (response) => {
        console.log('Commande créée avec succès', response);
        // Reset panier or perform other success actions
        this.navCtrl.navigateRoot('/home');
      },
      (error) => {
        this.error = error;
        console.error('Erreur lors de la création de la commande', error);
      }
    );
  }
}
