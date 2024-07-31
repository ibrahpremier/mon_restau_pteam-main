import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiUrl = 'http://127.0.0.1:8000/api';
 
  constructor(private httpClient: HttpClient) { }

  getCategory(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/categorie/${id}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getCategories(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/categorie`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
 
  
  panier: any[] = [];
  quantity: number = 0;
  
  

 
  getPlat(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/produit/${id}`, httpOptions).pipe(
    catchError(this.handleError)
  );
  }

  getPlats(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/produit`, httpOptions).pipe(
    catchError(this.handleError)
  );
  }

  createOrder(orderData: any): Observable<any> {
    
    return this.httpClient.post<any>(`${this.apiUrl}/commande`, orderData, httpOptions).pipe(
      catchError(this.handleError)
    );
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

  private handleError(error:any): Observable<never> {
   
    console.error(error);

    return throwError('Something bad happened; please try again later.');
  }

}


