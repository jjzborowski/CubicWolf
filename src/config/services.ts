import { SettingsService } from 'config/settings';
import { NavigationService } from 'services/navigation/navigation.service';
import { ProjectsService } from 'services/projects/projects.service';
import { ErrorsHandlerService } from 'services/errors-handler/errors-handler.service';

export const SERVICES: any[] = [
  SettingsService,
  NavigationService,
  ProjectsService,
  ErrorsHandlerService
];
