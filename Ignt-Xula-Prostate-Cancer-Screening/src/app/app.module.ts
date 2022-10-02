import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule} from './features/home/home.module';
import { ProstateImportanceModule } from './features/prostate-importance/prostate-importance.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,

    // "Singleton" modules (not feature modules)
    LayoutModule,

    // Feature modules
    HomeModule,
    ProstateImportanceModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
