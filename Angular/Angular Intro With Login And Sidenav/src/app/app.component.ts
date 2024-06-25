import { Component, OnInit } from '@angular/core';
import { AVAILABLE_LOCALES, Locale, setLocale } from '@intro/i18n/i18n';
import { TranslateService } from '@ngx-translate/core';
import { RouterLinksEnum } from './router-links.enum';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavService } from './services/sidenav.service';
import { AuthService } from './services';

@Component({
    selector: 'intro-app-root',
    templateUrl: './app.component.html',
})
export class AppComponent extends DashboardComponent implements OnInit {
    public routerLinks = RouterLinksEnum;
    public languageOptions: { label: string; locale: Locale }[] = [];
    public isLoggedIn: boolean;

    public constructor(
        private _translateService: TranslateService,
        private _authService: AuthService,
        _sidenavService: SidenavService,
    ) {
        super(_sidenavService);
    }

    public ngOnInit(): void {
        this.languageOptions = [
            { label: 'English', locale: AVAILABLE_LOCALES[0] },
            { label: 'Deutsch', locale: AVAILABLE_LOCALES[1] },
        ];

        const savedLang = localStorage.getItem('locale') || 'en-GB';
        this._translateService.setDefaultLang(savedLang);
        this._translateService.use(savedLang);

        this._sidenavSubscription = this._sidenavService.sidenavState.subscribe((isOpen) => {
            this.isNavOpen = isOpen;
        });

        this._authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
            this.isLoggedIn = isLoggedIn;
        });
    }

    public changeLanguage(locale: Locale): void {
        setLocale(locale, localStorage);
        this._translateService.use(locale);
        localStorage.setItem('locale', locale);
    }

    public isSidenavOpen(): boolean {
        return this.isNavOpen;
    }
}
