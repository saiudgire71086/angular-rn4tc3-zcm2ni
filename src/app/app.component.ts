import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-tabs-card',
  template: `
    <nz-tabset nzType="card" (nzSelectedIndexChange)="deviceBatchTab($event)">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="tab.name">Content of Tab Pane {{ tab.name }}</nz-tab>
    </nz-tabset>
  `,
})
export class NzDemoTabsCardComponent {
  tabs = [
    {
      name: 'Tab 1',
    },
    {
      name: 'Tab 2',
    },
    {
      name: 'Tab 3',
    },
    {
      name: 'Tab 4',
    },
  ];

  deviceBatchTab(e) {
    const tabSel = this.tabs[e];
    console.log(tabSel);
    console.log(e);
  }
}
