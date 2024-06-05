// Allow some console errors since we're in startup
/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@angular/localize" />

import { loadTranslations } from '@angular/localize';
import { registerLocaleData } from '@angular/common';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { getLocale, importLocale, setLocale } from './i18n/i18n';

const locale = getLocale();
setLocale(locale, sessionStorage);

Promise.all([fetch(`assets/i18n/${locale}.json`), importLocale(locale)])
    .then((responses) => {
        if (!responses[0].ok) {
            throw new Error(`HTTP error ${responses[0].status}`);
        }

        const moduleLocale = responses[1].default[0];
        registerLocaleData(responses[1].default, moduleLocale);

        return responses[0].json();
    })
    .then((result) => {
        loadTranslations(result.translations);

        platformBrowserDynamic([])
            .bootstrapModule(AppModule)
            .catch((err) => console.error(err));
    })
    .catch((error) => {
        console.error('Unable to load locale data. Continuing with default.', error);

        platformBrowserDynamic([])
            .bootstrapModule(AppModule)
            .catch((err) => console.error(err));
    });
