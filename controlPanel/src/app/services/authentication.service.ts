import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { UserControllerService, InlineObject } from 'sdk';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private userService: UserControllerService) {
    }

    login(email: string, password: string) {
        const credentials: InlineObject = { email, password };

        return this.userService.userControllerLogin(credentials)
            .pipe(
                map(res => {
                    this.setSession(res);
                    return res;
                })
            );
    }

    private setSession(authResult): void {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
        console.log(authResult);
    }

    logout(): void {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isLoggedIn(): boolean {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    getExpiration(): moment.Moment {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}