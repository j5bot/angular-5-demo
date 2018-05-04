import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../modules/material-module';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './containers/app/app.component';
import { AppEffects } from './effects/effects';
import { EnterFeedbackComponent } from './containers/enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from './containers/submit-feedback/submit-feedback.component';
import { EnterButtonComponent } from './components/enter-button/enter-button.component';
import { EnterFeedbackModalComponent } from './components/enter-feedback-modal/enter-feedback-modal.component';
import { SubmitFeedbackModalComponent }
  from './components/submit-feedback-modal/submit-feedback-modal.component';
import { reducers } from './reducers';
import { FeedbackComponent } from './containers/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterFeedbackComponent,
    SubmitFeedbackComponent,
    EnterButtonComponent,
    EnterFeedbackModalComponent,
    SubmitFeedbackModalComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects]),
    MaterialModule,
    OverlayModule,
    FormsModule,
    StoreModule.forRoot( reducers ),
    StoreDevtoolsModule.instrument()
  ],
  entryComponents: [
    EnterFeedbackComponent,
    SubmitFeedbackComponent
  ],
  providers: [
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
