import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule,  } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';




@Component({
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
    selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent  implements OnInit {
  inscriptionForm: FormGroup;
  @Input() returnUrl: string | null = null; 

  constructor(private fb: FormBuilder, private globalService: GlobalService, private router:Router,private modalController: ModalController) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    
  }
  ngOnInit() {}


  async onSubmit() { // Marquer la fonction comme 'async'
    if (this.inscriptionForm.valid) {
      this.globalService.register(this.inscriptionForm.value).subscribe({
        next: async (response) => { // Marquer cette fonction comme 'async' aussi
          console.log('Inscription réussie:', response.data);

          // Supposons que l'ID du client soit dans la réponse sous `response.clientId`
          const clientId = response.data.id;
          
          // Fermer le modal
          const modal = await this.modalController.getTop();
          if (modal) {
            await modal.dismiss();
          }

          // Rediriger vers la page Panier en passant l'ID du client
          this.router.navigate(['/panier' ],  {
            queryParams: {
              id: response.data.id,
              nom: response.data.nom,
              prenom:response.data.prenom, // Ajoutez d'autres informations si nécessaire
            }
          }
         );
        },
        error: (err) => {
          console.error('Erreur lors de l\'inscription:', err);
        }
      });
    }
  }
  }
  

  

 


