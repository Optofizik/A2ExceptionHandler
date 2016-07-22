import {Component, BaseException} from "@angular/core"
import {EventService} from "./event.service";


@Component({
    selector: "error-message",
    template: `
                 <div id="message-container">{{ message }}</div>
              `,
    styles: ["#message-container { color: red; }"]
})
export class ErrorMessageComponent {

    constructor(private eventService: EventService) {
       this.eventService.subscriveToEvent(this, "application-error", this.onError);
    }

    public  message: string = "abc";

    onError(value: any, object: any): void {
        object.message = "Error message: " + value["originalException"];
    }
}
