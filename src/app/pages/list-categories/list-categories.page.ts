import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.page.html',
  styleUrls: ['./list-categories.page.scss'],
})
export class ListCategoriesPage implements OnInit {

  categories : any[] = [];
  constructor(
    public globalService: GlobalService, 
  ) 
  {
    this.loadCategories();
  }

  ngOnInit() {
    console.log('');
  }
  loadCategories() {
    this.globalService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.curent_page;
       
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }
}
