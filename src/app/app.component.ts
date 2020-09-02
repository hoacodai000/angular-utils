import { Component, OnInit } from '@angular/core';

import { TSGuard } from './utils/tsGuard';
import { SubSink } from './utils/subsink';
import { Clone } from './utils/clone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-utils';

  private subSink: SubSink = new SubSink();

  constructor() { }

  ngOnInit(): void {
  }
}
