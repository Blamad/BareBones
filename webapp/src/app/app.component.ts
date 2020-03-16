import { Component, OnInit, OnDestroy } from '@angular/core';

import { PingControllerService } from '../../sdk/api/pingController.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PingControllerService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  pingSubscription: Subscription;

  constructor(private pingController: PingControllerService) { }

  ngOnInit(): void {
    this.pingSubscription = this.pingController.pingControllerPing('body', true, {
      httpHeaderAccept: 'application/json'
    }).subscribe(result => {
      this.title = result.greeting;
    });
  }

  ngOnDestroy(): void {
    this.pingSubscription.unsubscribe();
  }

}
