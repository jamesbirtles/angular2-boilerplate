import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS } from "angular2/router";
import { AppComponent } from "./app.component";

bootstrap(AppComponent, [ ROUTER_PROVIDERS ])
  .then(() => console.debug("Application Ready."))
  .catch(err => console.warn(err));
