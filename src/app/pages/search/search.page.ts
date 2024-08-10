import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string = '';
  
  filteredItems: any[] = [];
  categories: any[] = [];
  plats: any[] = [];
  totalPrix: number = 0;

  constructor(
    public globalService: GlobalService,
    private router: Router
  ) {
    //this.categories = globalService.category_repas;
    // this.categories.forEach((cat: any) => {
    //   this.plats = this.plats.concat(...cat.liste_plat);
    // });
    
    // this.loadCategories();
    
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

  getQuantity(item: any): number {
    return item.quantity; // Retourne la quantité actuelle de l'article
  }
  

  ngOnInit() {
    this.loadPlats();
    this.filterItems(); // Initialisation du filtre
  }

  filterItems() {
    this.filteredItems = this.plats;
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredItems = this.plats.filter((plat:any) => {
      return plat.nom.toLowerCase().includes(searchTermLower);
  }) 
  }

  loadPlats() {
    this.globalService.getPlats().subscribe({
      next: (response: any) => {
        this.plats = response.data;
        this.filteredItems = response.data;
          response.data.forEach((plats: { quantity: number }) => {
            plats.quantity = 0;
          });
          return response.data;
        },
        
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }
   
  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
