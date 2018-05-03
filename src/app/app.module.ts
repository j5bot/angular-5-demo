import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../modules/material-module';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './containers/app/app.component';
import { EnterFeedbackComponent } from './containers/enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from './containers/submit-feedback/submit-feedback.component';
import { EnterButtonComponent } from './components/enter-button/enter-button.component';
import { EnterFeedbackModalComponent } from './components/enter-feedback-modal/enter-feedback-modal';
import { SubmitFeedbackModalComponent }
  from './components/submit-feedback-modal/submit-feedback-modal';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    EnterFeedbackComponent,
    SubmitFeedbackComponent,
    EnterButtonComponent,
    EnterFeedbackModalComponent,
    SubmitFeedbackModalComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    OverlayModule,
    FormsModule,
    StoreModule.forRoot( reducers ),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
