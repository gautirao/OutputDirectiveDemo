import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emittedValue = 'Button is not clicked yet';
  onButtonClicked(emittedValueFromChild : string) {
this.emittedValue = emittedValueFromChild;  }
}
