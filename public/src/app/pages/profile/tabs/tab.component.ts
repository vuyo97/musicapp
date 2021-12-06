import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'my-tab',
  template :`
  <div [hidden]="!active" class="pane">
    <ng-content></ng-content>
  </div>
`,
  styleUrls: ['./tabs.component.scss']
})
export class TabComponent {
  @Input('tabTitle') title!: string;
  @Input() active = false;
}
