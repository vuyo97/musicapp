import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'my-tab',
  template :`
  <div [hidden]="!active" class="{pane}">
    <ng-content></ng-content>
  </div>
`,
styles: [
  `
  .pane{
    padding: 1em;
  }
`
]
})
export class TabComponent {
  @Input('tabTitle') title!: string;
  @Input() active = false;
}
