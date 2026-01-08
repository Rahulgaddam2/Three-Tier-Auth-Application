import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username = '';
  password = '';
  message = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signup(): void {
    this.message = '';
    this.error = '';

    this.authService.signup(this.username, this.password).subscribe({
      next: (res) => {
        this.message = res;

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (err) => {
        console.error('Signup error:', err);
        this.error = 'Signup failed';
      }
    });
  }
}
