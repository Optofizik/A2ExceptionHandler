"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require("@angular/core");
var app_component_1 = require('./app.component');
var event_service_1 = require("./event.service");
var custom_exception_handler_1 = require("./custom-exception-handler");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [event_service_1.EventService, { provide: core_1.ExceptionHandler, useClass: custom_exception_handler_1.CustomExceptionHandler }]);
//# sourceMappingURL=main.js.map