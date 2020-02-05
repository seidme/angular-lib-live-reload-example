import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MyLibModule } from "my-lib";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
