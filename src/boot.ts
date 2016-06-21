import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app.component";

bootstrap(AppComponent, [])
  .then(() => console.debug("Application Ready."))
  .catch(err => console.warn(err));
