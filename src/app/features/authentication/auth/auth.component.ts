import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations/route-animations';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [slider],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
