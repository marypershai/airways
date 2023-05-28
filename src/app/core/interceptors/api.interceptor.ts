import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly apiURL =
    'http://ec2-52-31-76-72.eu-west-1.compute.amazonaws.com/';

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const reqClone = request.clone({
      url: this.apiURL + request.url,
    });
    return next.handle(reqClone);
  }
}
