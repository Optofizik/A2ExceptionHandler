import { bootstrap }    from '@angular/platform-browser-dynamic';
import {ExceptionHandler} from "@angular/core";
import { AppComponent } from './app.component';
import {EventService} from "./event.service";
import {CustomExceptionHandler} from "./custom-exception-handler";

bootstrap(AppComponent, [EventService, {provide: ExceptionHandler, useClass: CustomExceptionHandler}]);