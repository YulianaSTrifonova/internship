import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { getLocale } from '@intro/i18n/i18n';

import { IntroAppRoutingModule as AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useFactory: (): string => getLocale(),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
