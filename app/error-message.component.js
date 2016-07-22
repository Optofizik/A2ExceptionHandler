"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("./event.service");
var ErrorMessageComponent = (function () {
    function ErrorMessageComponent(eventService) {
        this.eventService = eventService;
        this.message = "abc";
        this.eventService.subscriveToEvent(this, "application-error", this.onError);
    }
    ErrorMessageComponent.prototype.onError = function (value, object) {
        object.message = "Error message: " + value["originalException"];
    };
    ErrorMessageComponent = __decorate([
        core_1.Component({
            selector: "error-message",
            template: "\n                 <div id=\"message-container\">{{ message }}</div>\n              ",
            styles: ["#message-container { color: red; }"]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());
exports.ErrorMessageComponent = ErrorMessageComponent;
//# sourceMappingURL=error-message.component.js.map