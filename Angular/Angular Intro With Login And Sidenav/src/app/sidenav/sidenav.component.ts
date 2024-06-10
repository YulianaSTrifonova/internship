import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LOCALES, Locale, setLocale } from '@intro/i18n/i18n';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { navbarData } from './nav-data';

interface SidenavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [style({ opacity: 0 }), animate('350ms', style({ opacity: 1 }))]),
            transition(':leave', [style({ opacity: 1 }), animate('350ms', style({ opacity: 0 }))]),
        ]),
    ],
})
export class SidenavComponent {
    @Input() public data: { label: string };
    @Output() public toggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();

    public isLoggedIn: boolean;

    public isLanguageDropdownOpen = false;

    public collapsed = false;
    public navData = navbarData;

    public languageOptions: ({ label: string; locale: 'en-GB' } | { label: string; locale: 'de-AT' })[];

    public constructor(
        private _translateService: TranslateService,
        private _authService: AuthService,
    ) {}

    public ngOnInit(): void {
        this._authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
            this.isLoggedIn = isLoggedIn;
            this.collapsed = false;
        });

        this.languageOptions = [
            { label: 'English', locale: AVAILABLE_LOCALES[0] },
            { label: 'Deutsch', locale: AVAILABLE_LOCALES[1] },
        ];

        const savedLang = localStorage.getItem('locale') || 'en-GB';
        this._translateService.setDefaultLang(savedLang);
        this._translateService.use(savedLang);
    }

    public changeLanguage(locale: Locale): void {
        setLocale(locale, localStorage);
        this._translateService.use(locale);
        localStorage.setItem('locale', locale);
    }

    public closeSidenav(): void {
        this.collapsed = false;
    }
    public toggleCollapse(): void {
        this.collapsed = !this.collapsed;
    }

    public getTranslationKey(label: string): string {
        return `translations.${label}`;
    }

    public toggleLanguageDropdown(): void {
        this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
    }

    public logout(): void {
        this._authService.logout();
    }
}
