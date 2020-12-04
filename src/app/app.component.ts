import { Component } from '@angular/core';

const MAX = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  count = 0;

  addCount(): void {
    if (this.count < MAX) {
      this.count = this.count + 1;
    }
  }
}
