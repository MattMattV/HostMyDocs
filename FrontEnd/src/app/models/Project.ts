import { Version } from './Version';

export class Project {
    /**
     * Name of the project
     */
    public name: string;

    /**
     * The different [versions]{@link Version} where documentation is available for this project
     */
    public versions: Version[];
}
