import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const protectedRoutes: string[] = [
        '/home',
        '/animals',
        '/data-manipulation',
        '/directives',
        '/form',
        '/weather',
        '/charts',
    ];

    if (protectedRoutes.includes(state.url)) {
        return authService.isLoggedIn.pipe(
            take(1),
            map((isLoggedIn: boolean) => {
                if (isLoggedIn) {
                    return true;
                } else {
                    router.navigate(['/login']);

                    return false;
                }
            }),
        );
    } else {
        return true;
    }
};
