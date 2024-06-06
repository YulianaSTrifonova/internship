import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@intro/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public errorMessage = '';
    public hide = true;

    public constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private _router: Router,
    ) {}

    public ngOnInit(): void {
        this.loginForm = this._fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
                ],
            ],
        });
    }

    public onLogin(): void {
        if (this.loginForm.valid) {
            const { username, email, password } = this.loginForm.value;
            if (this._authService.login(username, email, password)) {
                this._router.navigate(['/home']);
            } else {
                this.errorMessage = 'Invalid username, email, or password.';
            }
        } else {
            this.errorMessage = 'Please fill in all fields correctly.';
            this.loginForm.markAllAsTouched();
        }
    }

    public clickEvent(event: MouseEvent): void {
        this.hide = !this.hide;
        event.stopPropagation();
    }
}
