import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _isLoggedInSubject = new BehaviorSubject<boolean>(false);

    public isLoggedIn = this._isLoggedInSubject.asObservable();

    public constructor(private _router: Router) {}

    public login(username: string, email: string, password: string): boolean {
        const validUsername = 'user';
        const validEmail = 'user@gmail.com';
        const validPassword = 'MyPassw0rd!';

        const isLoggedIn = username === validUsername && email === validEmail && password === validPassword;

        if (isLoggedIn) {
            this._router.navigate(['/home']);
        }

        this._isLoggedInSubject.next(isLoggedIn);

        return isLoggedIn;
    }

    public logout(): void {
        this._isLoggedInSubject.next(false);
        this._router.navigate(['/login']);
    }
}
