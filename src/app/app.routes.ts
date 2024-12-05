import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WaitingRoomPageComponent } from './waiting-room-page/waiting-room-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
  { path: 'room/:idRoom', component: WaitingRoomPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/home' } // Gestion des routes non trouvées
];
