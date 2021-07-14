import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceComponent } from './face/face.component';
import { LipsComponent } from './lips/lips.component';
import { EyesComponent } from './eyes/eyes.component';
import { CheekComponent } from './cheek/cheek.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'home', component: HomeComponent},
      { path:'face', component: FaceComponent},
      { path:'lips', component: LipsComponent},
      { path:'eyes', component: EyesComponent},
      { path:'cheek', component: CheekComponent},
      { path:'**', redirectTo: 'home'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MakeupRoutingModule { }
