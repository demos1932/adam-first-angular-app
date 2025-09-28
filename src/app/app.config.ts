import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { ThemeService } from './services/Theme.service';

registerLocaleData(en);

export function loadTheme(themeService: ThemeService): Function {
  return () => {
    themeService.changeTheme();
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideNzI18n(en_US), provideAnimationsAsync(), provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: loadTheme,
      deps:[ThemeService],
      multi: true
    }
  ]
};
