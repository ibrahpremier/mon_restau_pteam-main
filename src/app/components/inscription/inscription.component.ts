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
  client: any;

  constructor(private fb: FormBuilder, private globalService: GlobalService, private router:Router,private modalController: ModalController) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      role: ['user', Validators.required],
      status: ['1', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    
  }
  ngOnInit() {}


  async onSubmit() {
    if (this.inscriptionForm.valid) {
      this.globalService.register(this.inscriptionForm.value).subscribe({
        next: async (response) => {
          console.log('Inscription réussie:', response.data);

          // Supposons que l'ID du client soit dans la réponse sous `response.data.id`
          const clientId = response.data.id;

          // Stocker l'ID du client dans le service global
          this.globalService.setClient(clientId);

          // Fermer le modal
          const modal = await this.modalController.getTop();
          if (modal) {
            await modal.dismiss();
          }

          // Rediriger vers la page Panier en passant l'ID du client
          this.router.navigate(['/panier', clientId]);
        },
        error: (err) => {
          console.error('Erreur lors de l\'inscription:', err);
        }
      });
    }
  }
  }
  

  

 


