import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { getLocale } from '@intro/i18n/i18n';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IntroAppRoutingModule as AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SidenavComponent } from './sidenav/sidenav.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent, SidenavComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        MatSlideToggleModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useFactory: (): string => getLocale(),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    public constructor(_translateService: TranslateService) {
        const defaultLang = localStorage.getItem('locale') || 'en-GB';
        _translateService.setDefaultLang(defaultLang);
        _translateService.use(defaultLang);
    }
}
