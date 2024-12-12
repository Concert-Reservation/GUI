import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {}

    onLogin(): void {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;

            // Simulazione login (sostituire con chiamata API)
            if (email === 'admin@concerti.com' && password === 'Password123') {
                alert('Login avvenuto con successo!');
                this.router.navigate(['/dashboard']); // Cambia con la rotta appropriata
            } else {
                alert('Email o password non validi.');
            }
        }
    }
}
