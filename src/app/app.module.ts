import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EnterFeedbackComponent } from './enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterFeedbackComponent,
    SubmitFeedbackComponent
  ],
  imports: [
    BrowserModule, OverlayModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
