import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LOCALES, Locale, setLocale } from '@intro/i18n/i18n';

interface SidenavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
    isLanguageDropdownOpen = false;

    @Input() public data: { label: string };

    @Output() public toggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
    public collapsed = false;
    public screenWidth = 0;
    public navData = navbarData;

    public languageOptions: ({ label: string; locale: 'en-GB' } | { label: string; locale: 'de-AT' })[];

    public constructor(private _translateService: TranslateService) {}

    public ngOnInit(): void {
        this.screenWidth = window.innerWidth;

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
        this.toggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
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
}
