import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceComponent } from './face/face.component';
import { CheekComponent } from './cheek/cheek.component';
import { EyesComponent } from './eyes/eyes.component';
import { LipsComponent } from './lips/lips.component';
import { MakeupRoutingModule } from './makeup-routing.module';



@NgModule({
  declarations: [
    FaceComponent,
    CheekComponent,
    EyesComponent,
    LipsComponent
  ],
  imports: [
    CommonModule,
    MakeupRoutingModule
  ]
})
export class MakeupModule { }
