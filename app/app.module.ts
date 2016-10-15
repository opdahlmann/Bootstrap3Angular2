import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* App component and routing */
import { AppComponent } from './app.component';
import { routing } from './app.routes'; 

/* Services */
import { LoggerService } from './services/logger.service';


/* App Components */
import { HomeComponent }      from './components/home/home.component';




@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        JsonpModule,
        routing
    ],
    exports: [ AppComponent ],
    declarations: [AppComponent, HomeComponent],
    providers: [LoggerService, Title],
    bootstrap: [AppComponent],
})


export class AppModule { }
