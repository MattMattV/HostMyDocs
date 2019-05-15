import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

import { ProjectsService } from './services/projects.service';

import { FilterProjectsPipe } from './pipes/filter-projects.pipe';
import { ClipboardDirective } from './directives/clipboard.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ClipboardDirective,
        FilterProjectsPipe,
        ProjectCardComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [ProjectsService],
    bootstrap: [HomePageComponent]
})
export class AppModule { }
