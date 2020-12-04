import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-panel',
  templateUrl: './count-panel.component.html',
  styleUrls: ['./count-panel.component.sass'],
})
export class CountPanelComponent {
  @Input()
  count = 0;
}
