/*** ANGULAR IMPORTS ***/
/*** APP IMPORTS ***/
import { ANIMATION_TYPES } from 'ngx-loading';

export class SettingsService {
    private _API_PROJECTS_URL = 'http://localhost:8000/api/projects/';

    private _LOADER_CONFIG = {
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.2)',
        backdropBorderRadius: '0px',
        fullScreenBackdrop: true,
        primaryColour: '#D800DD',
        secondaryColour: '#B200BB',
        tertiaryColour: '#820088'
    };

    get API_PROJECTS_URL(): string {
        return this._API_PROJECTS_URL;
    }

    get LOADER_CONFIG(): {} {
        return this._LOADER_CONFIG;
    }
}
