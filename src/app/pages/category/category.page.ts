import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categorieId : number|null = null;
  category: any;
  categories: any[] = [];
  plat: any[] = [];
  totalPrix: number = 0;

  constructor(
    public globalService: GlobalService, 
    private route: ActivatedRoute,
    private router: Router,
    private routerLink: Router
  ) {

    this.initializeQuantities(); // Appel de la méthode pour initialiser les quantités
  }

  ngOnInit() {
    this.categorieId = Number(this.route.snapshot.paramMap.get('id'));
    this.category =  this.globalService.getCategory(this.categorieId);
    console.log(this.category);
  }
  loadCategory(id: number) {
    this.globalService.getCategory(id).subscribe({
      next: (response: any) => {
        this.categories = response.curent_page;
       
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }

  initializeQuantities() {
    this.categories.forEach((category) => {
      category.liste_plat.forEach((item: { quantity: number }) => {
        item.quantity = 0; // Initialisation de la quantité à 0 pour chaque plat
      });
    });
  }

  goToOtherPage() {
    this.router.navigate(['/search']);
  }

  goToPageCategories() {
    this.routerLink.navigate(['/list-categories']);
  }

  getQuantity(item: any): number {
    return item.quantity; // Retourne la quantité actuelle de l'article
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

  addQuantity(item: any) {
    item.quantity++; // Ajoute 1 à la quantité de l'article
    if (item.quantity >= 1) {
      this.globalService.ajouterAuPanier(item, item.quantity);
    }
  }
 
}
