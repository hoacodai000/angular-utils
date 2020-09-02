import { Component, OnInit } from '@angular/core';

import { TSGuard } from './utils/tsGuard';
import { SubSink } from './utils/subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-utils';

  private tsGuard: TSGuard = new TSGuard();
  private subSink: SubSink = new SubSink();

  constructor() { }

  ngOnInit(): void {

  }
}
