import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: 'makeup',
    loadChildren: () => import('./makeup/makeup.module').then(m => m.MakeupModule)},
  {
    path:'**',
    redirectTo:'makeup'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
