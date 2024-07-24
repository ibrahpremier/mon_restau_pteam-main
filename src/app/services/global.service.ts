import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  category_repas = [
    {
      "id": 1,
      "nom_category": "Entrées",
      "image_category": "https://placehold.co/400",
      "liste_plat": [
        {
          "id": 1,
          "nom_plat": "Salade de chèvre chaud",
          "description_plat": "Salade verte avec des toasts de chèvre chaud, noix et vinaigrette au miel",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 2,
          "nom_plat": "Soupe à l'oignon",
          "description_plat": "Soupe gratinée à l'oignon avec du fromage fondu",
          "image_plat": "https://placehold.co/400",
          "prix": 800
        },
        {
          "id": 3,
          "nom_plat": "Carpaccio de bœuf",
          "description_plat": "Tranches fines de bœuf marinées avec des copeaux de parmesan",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 4,
          "nom_plat": "Bruschetta",
          "description_plat": "Pain grillé avec des tomates fraîches, basilic, ail et huile d'olive",
          "image_plat": "https://placehold.co/400",
          "prix": 900
        },
        {
          "id": 5,
          "nom_plat": "Gaspacho",
          "description_plat": "Soupe froide de tomates, concombres, poivrons, oignons et ail",
          "image_plat": "https://placehold.co/400",
          "prix": 700
        },
        {
          "id": 6,
          "nom_plat": "Ailes de poulet buffalo",
          "description_plat": "Ailes de poulet croustillantes avec sauce piquante",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 7,
          "nom_plat": "Champignons farcis",
          "description_plat": "Champignons farcis au fromage et fines herbes, gratinés au four",
          "image_plat": "https://placehold.co/400",
          "prix": 900
        },
        {
          "id": 8,
          "nom_plat": "Calamars frits",
          "description_plat": "Calamars panés et frits, servis avec une sauce tartare",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 9,
          "nom_plat": "Croquettes de crevettes",
          "description_plat": "Croquettes de crevettes croustillantes avec sauce cocktail",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 10,
          "nom_plat": "Tartare de saumon",
          "description_plat": "Saumon frais coupé en dés avec avocat, oignons rouges et citron vert",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        }
      ]
    },
    {
      "id": 2,
      "nom_category": "Plats principaux",
      "image_category": "https://placehold.co/400",
      "liste_plat": [
        {
          "id": 11,
          "nom_plat": "Steak frites",
          "description_plat": "Steak grillé accompagné de frites croustillantes",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 12,
          "nom_plat": "Pâtes carbonara",
          "description_plat": "Pâtes avec une sauce à la crème, des lardons, du parmesan et du poivre noir",
          "image_plat": "https://placehold.co/400",
          "prix": 3000
        },
        {
          "id": 13,
          "nom_plat": "Burger classique",
          "description_plat": "Burger avec steak haché, fromage, salade, tomate et sauce spéciale",
          "image_plat": "https://placehold.co/400",
          "prix": 1500
        },
        {
          "id": 14,
          "nom_plat": "Risotto aux champignons",
          "description_plat": "Risotto crémeux aux champignons sautés et parmesan",
          "image_plat": "https://placehold.co/400",
          "prix": 2500
        },
        {
          "id": 15,
          "nom_plat": "Poulet rôti",
          "description_plat": "Poulet rôti avec pommes de terre au four et légumes grillés",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 16,
          "nom_plat": "Pizzas assorties",
          "description_plat": "Assortiment de pizzas avec diverses garnitures au choix",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 17,
          "nom_plat": "Poisson grillé",
          "description_plat": "Filet de poisson grillé avec sauce citronnée et légumes vapeur",
          "image_plat": "https://placehold.co/400",
          "prix": 2000
        },
        {
          "id": 18,
          "nom_plat": "Pad Thai végétarien",
          "description_plat": "Nouilles sautées au tofu, légumes et sauce aigre-douce",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 19,
          "nom_plat": "Côtelettes d'agneau",
          "description_plat": "Côtelettes d'agneau grillées servies avec purée de pommes de terre",
          "image_plat": "https://placehold.co/400",
          "prix": 2000
        },
        {
          "id": 20,
          "nom_plat": "Fajitas au poulet",
          "description_plat": "Fajitas au poulet avec poivrons, oignons, guacamole et salsa",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        }
      ]
    },
    {
      "id": 3,
      "nom_category": "Desserts",
      "image_category": "https://placehold.co/400",
      "liste_plat": [
        {
          "id": 21,
          "nom_plat": "Crème brûlée",
          "description_plat": "Crème vanillée avec une fine couche de sucre caramélisé",
          "image_plat": "https://placehold.co/400",
          "prix": 800
        },
        {
          "id": 22,
          "nom_plat": "Tiramisu",
          "description_plat": "Dessert italien à base de biscuits imbibés de café et de mascarpone",
          "image_plat": "https://placehold.co/400",
          "prix": 900
        },
        {
          "id": 23,
          "nom_plat": "Fondant au chocolat",
          "description_plat": "Gâteau au chocolat fondant servi chaud avec une boule de glace vanille",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 24,
          "nom_plat": "Cheesecake aux fruits rouges",
          "description_plat": "Cheesecake crémeux avec un coulis de fruits rouges",
          "image_plat": "https://placehold.co/400",
          "prix": 900
        },
        {
          "id": 25,
          "nom_plat": "Gâteau au fromage",
          "description_plat": "Gâteau au fromage classique avec une base de biscuit",
          "image_plat": "https://placehold.co/400",
          "prix": 8000
        },
        {
          "id": 26,
          "nom_plat": "Mousse au chocolat",
          "description_plat": "Mousse légère au chocolat noir et blanc",
          "image_plat": "https://placehold.co/400",
          "prix": 7000
        },
        {
          "id": 27,
          "nom_plat": "Café gourmand",
          "description_plat": "Assortiment de mini desserts avec une tasse de café",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 28,
          "nom_plat": "Crêpes Suzette",
          "description_plat": "Crêpes flambées au Grand Marnier, servies avec une sauce à l'orange",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 29,
          "nom_plat": "Tarte aux pommes",
          "description_plat": "Tarte aux pommes traditionnelle avec une touche de cannelle",
          "image_plat": "https://placehold.co/400",
          "prix": 5500
        },
        {
          "id": 30,
          "nom_plat": "Panna cotta",
          "description_plat": "Dessert italien crémeux à la vanille avec coulis de fruits rouges",
          "image_plat": "https://placehold.co/400",
          "prix": 4500
        }
      ]
    },
    {
      "id": 4,
      "nom_category": "Boissons",
      "image_category": "https://placehold.co/400",
      "liste_plat": [
        {
          "id": 31,
          "nom_plat": "Cocktail Mojito",
          "description_plat": "Cocktail rafraîchissant à base de rhum, menthe, citron vert et soda",
          "image_plat": "https://placehold.co/400",
          "prix": 3500
        },
        {
          "id": 32,
          "nom_plat": "Vin rouge Merlot",
          "description_plat": "Bouteille de vin rouge Merlot, idéale pour accompagner les plats de viande",
          "image_plat": "https://placehold.co/400",
          "prix": 2000
        },
        {
          "id": 33,
          "nom_plat": "Bières assorties",
          "description_plat": "Assortiment de bières locales et internationales",
          "image_plat": "https://placehold.co/400",
          "prix": 6000
        },
        {
          "id": 34,
          "nom_plat": "Café espresso",
          "description_plat": "Tasse de café espresso intense",
          "image_plat": "https://placehold.co/400",
          "prix": 3000
        },
        {
          "id": 35,
          "nom_plat": "Smoothie tropical",
          "description_plat": "Smoothie rafraîchissant à base de fruits tropicaux",
          "image_plat": "https://placehold.co/400",
          "prix": 700
        },
        {
          "id": 36,
          "nom_plat": "Eau minérale plate",
          "description_plat": "Bouteille d'eau minérale plate",
          "image_plat": "https://placehold.co/400",
          "prix": 2000
        },
        {
          "id": 37,
          "nom_plat": "Thé glacé maison",
          "description_plat": "Thé glacé maison parfumé aux fruits de saison",
          "image_plat": "https://placehold.co/400",
          "prix": 4000
        },
        {
          "id": 38,
          "nom_plat": "Jus d'orange frais",
          "description_plat": "Jus d'orange frais pressé",
          "image_plat": "https://placehold.co/400",
          "prix": 4000
        },
        {
          "id": 39,
          "nom_plat": "Limonade artisanale",
          "description_plat": "Limonade maison avec citron vert et menthe fraîche",
          "image_plat": "https://placehold.co/400",
          "prix": 5000
        },
        {
          "id": 40,
          "nom_plat": "Cocktail sans alcool",
          "description_plat": "Cocktail sans alcool rafraîchissant avec jus de fruits et sirop",
          "image_plat": "https://placehold.co/400",
          "prix": 6000
        }
      ]
    },
    {
      "id": 5,
      "nom_category": "Collations",
      "image_category": "https://placehold.co/400",
      "liste_plat": [
        {
          "id": 41,
          "nom_plat": "Assiette de fromages",
          "description_plat": "Assortiment de fromages avec pain et fruits secs",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 42,
          "nom_plat": "Assiette de charcuterie",
          "description_plat": "Assortiment de charcuterie avec cornichons et moutarde",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 43,
          "nom_plat": "Nachos gratinés",
          "description_plat": "Nachos gratinés avec fromage fondu, guacamole et salsa",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 44,
          "nom_plat": "Houmous et pain pita",
          "description_plat": "Houmous servi avec pain pita chaud",
          "image_plat": "https://placehold.co/400",
          "prix": 1000
        },
        {
          "id": 45,
          "nom_plat": "Olives marinées",
          "description_plat": "Assortiment d'olives marinées aux herbes",
          "image_plat": "https://placehold.co/400",
          "prix": 800
        },
        {
          "id": 46,
          "nom_plat": "Cacahuètes grillées",
          "description_plat": "Cacahuètes grillées et salées",
          "image_plat": "https://placehold.co/400",
          "prix": 600
        },
        {
          "id": 47,
          "nom_plat": "Popcorn au beurre",
          "description_plat": "Popcorn croustillant au beurre fondu",
          "image_plat": "https://placehold.co/400",
          "prix": 5000
        },
        {
          "id": 48,
          "nom_plat": "Brochettes de fruits",
          "description_plat": "Brochettes de fruits frais avec sauce au chocolat",
          "image_plat": "https://placehold.co/400",
          "prix": 900
        },
        {
          "id": 49,
          "nom_plat": "Bruschetta aux tomates",
          "description_plat": "Pain grillé avec des tomates fraîches, basilic, ail et huile d'olive",
          "image_plat": "https://placehold.co/400",
          "prix": 800
        },
        {
          "id": 50,
          "nom_plat": "Mini sandwichs",
          "description_plat": "Assortiment de mini sandwichs variés",
          "image_plat": "https://placehold.co/400",
          "prix": 1200
        }
      ]
    }
  ]
  
  panier: any[] = [];
  quantity: number = 0;
  
  constructor() { }

  getCategory(id: number){
    return this.category_repas.find((cat) => cat.id === id);
  }

  getPlat(id: number): any {
    for (const cat of this.category_repas) {
        const repas = cat.liste_plat.find((plat) => plat.id === id);
        if (repas) {
            return repas;
        }
    }
    return null;
  }

  ajouterAuPanier(item: any, quantite: number) {
    const index = this.panier.findIndex(p => p.item.id === item.id);
    if (index !== -1) {
      this.panier[index].quantite += 1; // Ajoute 1 à la quantité si l'article existe déjà dans le panier
    } else {
      this.panier.push({ item, quantite: 1 }); // Ajoute l'article au panier avec une quantité de 1 s'il n'existe pas encore
    }
    this.actualiserPanier();
  }
  
  enleverDuPanier(item: any, quantite: number) {
    const index = this.panier.findIndex(p => p.item.id === item.id);
    if (index !== -1) {
      if (quantite === 0) {
        this.panier.splice(index, 1); // Supprime l'article du panier si la quantité est égale à 0
      } else {
        this.panier[index].quantite = quantite; // Met à jour la quantité de l'article dans le panier
      }
    }
     // Si le panier est vide, réinitialise le tableau
    if (this.panier.length === 0) {
      this.panier = [];
    }
    this.actualiserPanier();
  }
  
  

  getTotalItems(): number {
    let total = 0;
    this.panier.forEach((item) => {
      total = this.panier.length;
    });
    return total;
  }

  getItemPrixTotal(): number {
    let total = 0;
    this.panier.forEach((item) => {
      total += item.item.prix * item.quantite;
    });
    return total;
  }

  actualiserPanier() {
    console.log('Contenu du panier : ', this.panier);
  }

}


