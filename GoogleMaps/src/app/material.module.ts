import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Angular material
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({//indica a angular que es un modulo personalizado
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,MatCardModule
  ]
})
export class MaterialModule { }
