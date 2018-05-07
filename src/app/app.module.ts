import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../modules/material-module';

import { AppEffects } from './effects/effects';

import { AppComponent } from './containers/app/app.component';
import { EnterButtonComponent } from './components/enter-button/enter-button.component';
import { EnterFeedbackComponent } from './components/enter-feedback/enter-feedback.component';
// import { EnterFeedbackModalComponent } from './components/enter-feedback-modal/enter-feedback-modal.component';
import { FeedbackComponent } from './containers/feedback/feedback.component';
import { SubmitFeedbackComponent } from './containers/submit-feedback/submit-feedback.component';
// import { SubmitFeedbackModalComponent } from './components/submit-feedback-modal/submit-feedback-modal.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    EnterButtonComponent,
    EnterFeedbackComponent,
    // EnterFeedbackModalComponent,
    FeedbackComponent,
    SubmitFeedbackComponent,
    // SubmitFeedbackModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([AppEffects]),
    FormsModule,
    MaterialModule,
    OverlayModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot( reducers )
  ],
  entryComponents: [
    EnterFeedbackComponent,
    FeedbackComponent,
    SubmitFeedbackComponent
  ],
  providers: [
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
