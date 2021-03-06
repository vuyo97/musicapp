import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tab',
  styleUrls: ['./tabs.component.scss'],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input('tabTitle') title!: string;
  @Input() active = false;
}
