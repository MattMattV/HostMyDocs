import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    /**
     * Url where we will request projects
     */
    private readonly getProjectsUrl = '/BackEnd/listProjects';

    constructor(private http: HttpClient) { }

    /**
     * Initiating request to BackEnd to fetch list of projects
     */
    public getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.getProjectsUrl);
    }
}
