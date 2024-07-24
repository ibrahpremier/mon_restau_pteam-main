import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  panier: any[] = [];

  constructor(public globalService: GlobalService) { }

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

}
