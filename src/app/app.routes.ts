import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact',
    loadComponent: () => import('./contact-form/contact-form').then(m => m.ContactForm),
  },
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full',
  },
];
