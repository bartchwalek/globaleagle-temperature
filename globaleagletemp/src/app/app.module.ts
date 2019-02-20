import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { HomeComponent } from './home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';     
 
import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatRadioModule,      
  MatSelectModule,   
  MatSidenavModule,   
  MatOptionModule,      
  MatSlideToggleModule, 
} from '@angular/material';      

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,      
    ReactiveFormsModule,      
    BrowserAnimationsModule,     
    MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatRadioModule,      
  MatSelectModule,   
  MatSidenavModule,   
  MatOptionModule,      
  MatSlideToggleModule,
  MatTableModule
    
  ],
  exports: [
    MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatRadioModule,      
  MatSelectModule,   
  MatSidenavModule,   
  MatOptionModule,      
  MatSlideToggleModule,
  MatTableModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
