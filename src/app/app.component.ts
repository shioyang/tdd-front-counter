import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  count = 0;

  addCount(): void {
    this.count = this.count + 1;
  }
}
