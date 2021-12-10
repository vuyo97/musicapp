import {Component, ContentChildren,QueryList,AfterContentInit,ViewChild,ComponentFactoryResolver,ViewContainerRef} from '@angular/core';
import { TabComponent } from './tab.component';
@Component({
  selector: 'app-tabs',
  template: `
  <ul class="nav nav-tabs">
    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
      <a class="w3-bar-item tab-title">{{tab.title}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
`,
styles: [
  `
  .tab-close {
    color: gray;
    text-align: right;
    cursor: pointer;
  }
  `,
]
})
export class TabsComponent implements AfterContentInit {
  //[x: string]: any;
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() { }
  ngAfterContentInit(): void {
   // get all active tabs
   let activeTabs = this.tabs.filter((tab)=>tab.active);

   // if there is no active tab set, activate the first
   if(activeTabs.length === 0) {
     this.selectTab(this.tabs.first);
   }
  }

  selectTab(tab: any){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }



}
