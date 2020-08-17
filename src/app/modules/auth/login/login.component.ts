import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {
    // If user already logged go back to dashboard
    if (this.authService.isAuthenticated()) {
      // this.router.navigate(['/home']);

      return;
    }
  }


  ngOnInit() {

  }

  createForm(): void {

  }

  onSubmit(): void {
  }

}
