import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ErrorHandlerService} from '../core/handlers/error-handler.service';
import {User} from './user.model';

// import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ErrorHandlerService {

  apiUrl = environment.apiUrl + '/auth';
  cachedRequests: Array<HttpRequest<any>> = [];
  // Observable source
  // private _userLogged = new BehaviorSubject<any>(null);
  // Observable stream
  // userLogged$ = this._userLogged.asObservable();

  constructor(private http: HttpClient) {
    super();
  }

  // Register a user
  public register(user: User) {
    const url = this.apiUrl + '/register';

    return this.http.post<RegisterResponse>(url, user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Login a user
  login(user: User) {
    const url = this.apiUrl + '/login';

    return this.http.post<LoginResponse>(url, user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Get authenticated user details
  me() {
    const url = this.apiUrl + '/auth-user';

    return this.http.get<LoginResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Logout user
  logout(): void {
    // Remove token
    this.clearToken();

    // Remove user
    this.removeUser();
  }

  // Store user
  public setUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));

    // this._userLogged.next(user);
  }

  // Get current user
  public getUser(): User {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user === null) {
      return null;
    }

    return new User().deserialize(
      JSON.parse(localStorage.getItem('currentUser'))
    );
  }

  // Remove current user
  public removeUser(): void {
    localStorage.removeItem('currentUser');

    // this._userLogged.next(null);
  }

  // Set token
  public setToken(token): void {
    localStorage.setItem('token', token);
  }

  // Get token
  public getToken(): string {
    return localStorage.getItem('token');
  }

  // Remove token
  public clearToken(): void {
    localStorage.removeItem('token');
  }

  // Check is authenticated
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();

    // return a boolean reflecting
    // whether or not the token is expired
    // return tokenNotExpired(null, token);
    return (localStorage.getItem('token') !== null);
  }

  // Collect failed request
  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }
}

// Register response
export interface RegisterResponse {
  message: string;
  token: string;
  user: User;
}

// Login response
export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}
