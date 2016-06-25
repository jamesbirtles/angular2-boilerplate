import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: "my-app",
  template: "<h1>Welcome to angular 2 boilerplate</h1>",
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
