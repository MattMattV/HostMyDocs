import { Language } from './Language';

export class Version {
    /**
     * The version number of the current documentation.
     */
    public number: string;

    /**
     * All the diffenrent [languages]{@link Language} where the documentation is available
     */
    public languages: Language[];
}
