import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule {}
