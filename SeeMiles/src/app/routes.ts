import { EventListener } from '@angular/core/src/debug/debug_node';
import { LoadChildren, Routes } from '@angular/router';
import { CreateMilesComponent } from "./miles/create-miles/create-miles.component";
import { MilesComponent } from "./miles/miles.component";
import { MileSettingsComponent } from "./mile-settings/mile-settings.component";
import { MilesResolver } from './miles/mile-resolver/miles-resolver.service';

import { SettingsResolver } from './mile-settings/settings-service/settings-resolver.service';
import { MileDetailsComponent } from "./miles/mile-details/mile-details.component";
import { DetailsResolver } from "./miles/mile-details/details-resolver/details-resolver.service";
export const appRoutes = [
    { path: 'miles/new', component: CreateMilesComponent},
    
    { path: 'miles', component: MilesComponent,
     resolve: {
         miles:MilesResolver,
         settings:SettingsResolver
        } 
    },
    { path: 'miles/settings',
     component: MileSettingsComponent,
     resolve: {settings: SettingsResolver}
    },
    {path: 'miles/details/:id',
     component: MileDetailsComponent,
     resolve: {details: DetailsResolver}
    },
    { path: '', redirectTo: '/miles', pathMatch: 'full' }
]