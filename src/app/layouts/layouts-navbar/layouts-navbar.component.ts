import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../modules/auth/auth.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-layouts-navbar',
  templateUrl: './layouts-navbar.component.html',
  styleUrls: ['./layouts-navbar.component.scss']
})
export class LayoutsNavbarComponent implements OnInit {

  subscription: Subscription;
  isLogged = false;
  isCollapsedMenu = true;
  currentUser;
  returnUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    // this.subscription = this.authService.userLogged$
    //   .subscribe(user => this.getUser(user));

    this.activatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params.returnUrl;
    });
  }

  ngOnInit() {
    this.getUser();
  }

  public logout(): void {
    this.authService.logout();

    this.router.navigate(['login']);
  }

  toggleCollapseMenu(): void {
    this.isCollapsedMenu = !this.isCollapsedMenu;
  }

  private getUser(user = null): void {
    this.isLogged = this.authService.isAuthenticated();

    this.currentUser = (user === null) ? this.authService.getUser() : user;
  }

  private goToLogin(): void {
    if (this.returnUrl !== undefined) {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: this.returnUrl
        }
      });

      return;
    }

    this.router.navigate(['/login']);
  }
}
