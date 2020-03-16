import { Component, OnInit } from '@angular/core';
import { UserControllerService } from '../../../sdk/api/userController.service';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { User } from '../../../sdk/model/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    providers: [UserControllerService]
})
  export class UsersComponent implements OnInit {
    users?: User[];
    userForm: FormGroup;

    constructor(private userService: UserControllerService) { }

    ngOnInit(): void {
        this.initUserForm();
        this.fetchUserData();
    }

    private fetchUserData(): void {
        this.userService.userControllerFind()
            .subscribe(result => this.users = result);
    }

    onSubmit(value) {
        const user: User = {
            name: value.name,
            email: value.email,
            creationDate: new Date(),
            lastUpdatedDate: new Date(),
            isBlocked: false
        };
        this.userService.userControllerCreate(user)
            .subscribe(() => this.fetchUserData());
    }

    private initUserForm(): void {
        this.userForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required)
          });
    }
}
