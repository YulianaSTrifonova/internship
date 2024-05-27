import { Component, OnInit } from '@angular/core';

import { AVAILABLE_LOCALES, Locale, setLocale } from '@intro/i18n/i18n';

import { RouterLinksEnum } from './router-links.enum';
@Component({
    selector: 'intro-app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public routerLinks = RouterLinksEnum;
    public languageOptions: { label: string; locale: Locale }[] = [];

    public ngOnInit(): void {
        this.languageOptions = [{ label: 'English', locale: AVAILABLE_LOCALES[0] }];
    }

    public changeLanguage(locale: Locale): void {
        setLocale(locale, localStorage);
        location.reload();
    }
}
