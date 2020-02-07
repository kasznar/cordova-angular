import {Component, OnInit} from '@angular/core';
declare var cordova;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'my-dream-app';

  constructor() {}

  ngOnInit(): void {
    cordova.plugins.notification.local.schedule({
      title: 'Cordova Angular notification <3',
      trigger: { in: 10, unit: 'second' }
    });
  }
}
