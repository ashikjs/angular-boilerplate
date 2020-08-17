import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
              if (event.status === 200) {
                const responseBody = event.body;

                // Set token if it's sent from server
                if (responseBody.hasOwnProperty('token')) {
                  this.authService.setToken(responseBody.token);
                }
              }
            }
          }, error => {
            const basePath = this.router.url.split('?')[0];

            if (error.status === 401 && basePath !== '/login') {
              this.router.navigate(['/login'], {
                queryParams: {
                  returnUrl: this.router.url.substr(1)
                }
              });

              this.authService.collectFailedRequest(request);
            }
          }
        )
      );
  }
}
