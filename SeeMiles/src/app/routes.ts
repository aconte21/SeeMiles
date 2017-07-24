import { EventListener } from '@angular/core/src/debug/debug_node';
import { LoadChildren, Routes } from '@angular/router';
import { CreateMilesComponent } from "./miles/create-miles/create-miles.component";
import { MilesComponent } from "./miles/miles.component";
import { MileSettingsComponent } from "./mile-settings/mile-settings.component";

export const appRoutes = [
    { path: 'miles/new', component: CreateMilesComponent},
    { path: 'miles', component: MilesComponent},
    { path: 'miles/settings', component: MileSettingsComponent},
    { path: '', redirectTo: '/miles', pathMatch: 'full' }
]