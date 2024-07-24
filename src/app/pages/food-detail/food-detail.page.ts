import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {
  plat: any;
  platId: number|null = null;

  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.platId = Number(this.route.snapshot.paramMap.get('id'));
    this.plat =  this.globalService.getPlat(this.platId);
    console.log(this.plat);
  }

}
