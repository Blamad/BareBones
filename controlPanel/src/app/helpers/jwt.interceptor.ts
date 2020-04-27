import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const idToken = localStorage.getItem('id_token');
        if (idToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${idToken}`
                }
            });
        }

        return next.handle(request);
    }
}