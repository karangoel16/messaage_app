import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component'; 
import {MessageAddComponent} from './message/message-add/message-add.component';
@NgModule({
    declarations: [
    	MessageAddComponent,
    	MessageComponent,
    	HeaderComponent,
        AppComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})
export class AppModule {

}