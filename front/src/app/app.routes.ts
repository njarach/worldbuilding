import { Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles';

export const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent }
];