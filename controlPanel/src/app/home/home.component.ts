import { Component, OnInit } from '@angular/core';
import { User, UserControllerService } from 'sdk';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    loading = false;
    users: User[];

    constructor(private userService: UserControllerService) { }

    ngOnInit(): void {
        this.loading = true;
        this.fetchUserData();
    }

    private fetchUserData(): void {
        this.userService.userControllerFind()
            .subscribe(result => {
                this.users = result;
                this.loading = false;
            });
    }
}