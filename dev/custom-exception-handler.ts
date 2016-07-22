import {Injectable, ExceptionHandler} from "@angular/core";
import {EventService} from "./event.service";

@Injectable()
export class CustomExceptionHandler extends ExceptionHandler {
    constructor(private eventService:EventService) {
        super(null);
    }

    call(exception:any, stackTrace?:any, reason?:string):void {
        this.eventService.raiseEvent(this, "application-error", exception);
    }
}
