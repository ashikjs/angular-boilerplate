import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  // Handle error TODO: handle error and send response object
  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
    }

    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    // Throw error response body, let the component handle what to do.
    return throwError(error.error);
  }
}
