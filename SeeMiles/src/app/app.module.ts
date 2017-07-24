import { appRoutes } from './routes';

import { MilesService } from './miles/shared/miles.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MilesComponent } from './miles/miles.component';
import { MilesThumbnailComponent } from './miles-thumbnail/miles-thumbnail.component';

import { CreateMilesComponent } from './miles/create-miles/create-miles.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { DatePickerComponent } from './miles/shared/date-picker/date-picker.component';
import { MileSettingsComponent } from './mile-settings/mile-settings.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MilesComponent,
    MilesThumbnailComponent,
    CreateMilesComponent,
    DatePickerComponent,
    MileSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
