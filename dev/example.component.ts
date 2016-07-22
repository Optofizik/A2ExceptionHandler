import {Component, BaseException} from "@angular/core"

@Component({
    selector: "example",
    template: `
                 <div>{{ myMethod()}}</div>
              `
})
export class ExampleComponent {
    public obj: any;

    myMethod(): string {

        let str: string = "a";

        try
        {
            str = this.obj["name"].toString();
        }
        catch(ex){
            throw new BaseException("rewuyriuwedfbndsmnbfsdf");
        }


        return "a";
    }
}