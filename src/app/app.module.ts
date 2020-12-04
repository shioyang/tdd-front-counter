import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountPanelComponent } from './count-panel/count-panel.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, CountPanelComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
