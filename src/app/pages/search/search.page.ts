import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string = '';
  items: string[] = ['Pizza', 'Burger', 'Salade', 'Pâtes', 'Sushi'];
  filteredItems: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('');
    
  }
  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
