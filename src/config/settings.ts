export class SettingsService {
    private _API_PROJECTS_URL = 'http://localhost:8000/api/projects/';

    get API_PROJECTS_URL(): string {
        return this._API_PROJECTS_URL;
    }
}
