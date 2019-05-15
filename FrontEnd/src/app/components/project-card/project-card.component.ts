import { Component, Input } from '@angular/core';

import { Project } from 'src/app/models/Project';
import { Language } from 'src/app/models/Language';
import { Version } from 'src/app/models/Version';

@Component({
    selector: 'hmd-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    public project: Project;

    public totalVersions: number;
    public totalLanguages: number;

    public selectedLanguage: Language = null;
    public _selectedVersion: Version = null;

    constructor() { }

    public openDoc(): void {

    }

    @Input('project')
    public set projectSetter(project: Project) {
        this.project = project;

        this.selectedVersion = project.versions[project.versions.length - 1];

        this.totalVersions = 0;
        this.totalLanguages = 0;

        for (const version of project.versions) {
            this.totalVersions++;

            for (const _ of version.languages) {
                this.totalLanguages++;
            }
        }
    }

    public get selectedVersion(): Version {
        return this._selectedVersion;
    }

    /**
     * Sets the selected version and if the version have only one language, "selects" it
     */
    public set selectedVersion(version: Version) {
        this._selectedVersion = version;

        if (version.languages.length === 1) {
            this.selectedLanguage = version.languages[0];
        }
    }
}
