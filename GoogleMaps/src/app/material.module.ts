import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Angular material
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({//indica a angular que es un modulo personalizado
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
