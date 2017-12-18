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

import { HttpModule } from '@angular/http';
import { MilesResolver } from './miles/mile-resolver/miles-resolver.service';
import { SettingsService } from './mile-settings/settings-service/settings.service';
import { SettingsResolver } from "./mile-settings/settings-service/settings-resolver.service";
import { DateComponent } from "./miles/date/date.component";
import { MileDetailsComponent } from './miles/mile-details/mile-details.component';
import { DetailsResolver } from "./miles/mile-details/details-resolver/details-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MilesComponent,
    MilesThumbnailComponent,
    CreateMilesComponent,
    DatePickerComponent,
    MileSettingsComponent,
    DateComponent,
    MileDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MilesService, MilesResolver,
    SettingsService, SettingsResolver,
    DetailsResolver
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
