import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


import { ProgressComponent } from '../progress/progress.component';
import { Grafica1Component } from '../grafica1/grafica1.component';
import { PagesComponent } from '../pages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';





@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent
   
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent
   
   

  ],
  imports: [   
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
 
    
    
     ]
})
export class PagesModule { }
