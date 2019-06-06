import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";

import { todoReducer } from "./Reducers/todo.reducer";

import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
