import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
// import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../modules/material-module';

import { AppEffects } from './effects/effects';

import { AppComponent } from './containers/app/app.component';
import { EnterButtonComponent } from './components/enter-button/enter-button.component';
import { FeedbackComponent } from './containers/feedback/feedback.component';
import { EnterFeedbackComponent } from './components/enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from './components/submit-feedback/submit-feedback.component';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    EnterButtonComponent,
    EnterFeedbackComponent,
    FeedbackComponent,
    SubmitFeedbackComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([AppEffects]),
    // FormsModule,
    MaterialModule,
    OverlayModule,
    ReactiveFormsModule,
    StoreModule.forRoot( reducers, {
      metaReducers } ),
    StoreDevtoolsModule.instrument()
  ],
  entryComponents: [
    FeedbackComponent,
    EnterFeedbackComponent,
    SubmitFeedbackComponent
  ],
  providers: [
    MaterialModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
