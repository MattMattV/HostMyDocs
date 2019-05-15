import { Component, OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/Project';

@Component({
    selector: 'hmd-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    /**
     * All project that have been uploaded to backend
     */
    public projects: Project[] = [];

    /**
     * Variable used to filter the list of projects
     */
    public filterValue = '';

    constructor(private projectsService: ProjectsService) { }

    ngOnInit() {
        this.projectsService.getProjects().subscribe(
            (projects: Project[]) => {
                this.projects = projects.sort((a, b) => parseInt(a.name, 10) );
            }
        );
    }
}
