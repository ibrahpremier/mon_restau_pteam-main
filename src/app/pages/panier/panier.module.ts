import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';
import { InscriptionComponent } from 'src/app/components/inscription/inscription.component'; // Importer la composante


import { PanierPage } from './panier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule,
    InscriptionComponent

  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
