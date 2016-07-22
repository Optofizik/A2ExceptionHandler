import { Component } from '@angular/core';
import {ErrorMessageComponent} from "./error-message.component";
import {ExampleComponent} from "./example.component";

@Component({
  selector: 'my-app',
  template: `
              <error-message></error-message>
              <h1>My First Angular 2 App</h1>
              <example></example>
            `,
  directives: [ErrorMessageComponent, ExampleComponent]
})
export class AppComponent {

}