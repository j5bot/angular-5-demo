import {
  Inject,
  NgModule,
  Component,
  Directive,
  Injector,
  OverlayContainer,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatDialog
} from '@angular/material';

@Component({
  template: `
  <h1>This is in a dialog</h1>
  `
})
class TestInDialogComponent {}

@Directive({selector: 'dir-with-view-container'})
class DirectiveWithViewContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'arbitrary-component',
  template: `<dir-with-view-container></dir-with-view-container>`,
})
class ComponentWithChildViewContainer {
  @ViewChild(DirectiveWithViewContainer) childWithViewContainer: DirectiveWithViewContainer;

  get childViewContainer() {
    return this.childWithViewContainer.viewContainerRef;
  }
}

@Directive({selector: 'dir-with-view-container'})
class DirectiveWithViewContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'arbitrary-component',
  template: `<dir-with-view-container></dir-with-view-container>`,
})
class ComponentWithChildViewContainer {
  @ViewChild(DirectiveWithViewContainer) childWithViewContainer: DirectiveWithViewContainer;

  get childViewContainer() {
    return this.childWithViewContainer.viewContainerRef;
  }
}

describe('FeedbackComponent', () => {

  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;

  let testViewContainerRef: ViewContainerRef;
  let viewContainerFixture: ComponentFixture<ComponentWithChildViewContainer>;

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        DialogTestModule
      ],
      providers: [
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }}
      ]
    });

    TestBed.compileComponents();

  }));

  beforeEach(inject([MatDialog]), (d: MatDialog) => {
    dialog = d;
  });

  beforeEach(() => {
   viewContainerFixture = TestBed.createComponent(ComponentWithChildViewContainer);

   viewContainerFixture.detectChanges();
   testViewContainerRef = viewContainerFixture.componentInstance.childViewContainer;
 });

 it('open dialog', () => {
   // let dialogRef = dialog.open( TestInDialogComponent, {
   //   viewContainerRef: testViewContainerRef
   // });
   //
   // expect(dialogRef).toBeTruthy();
 });

});

const TEST_DIRECTIVES = {
  TestInDialogComponent
};

@NgModule({
  imports: [
    MatDialogModule,
    NoopAnimationsModule
  ],
  exports: [
    ComponentWithChildViewContainer,
    DirectiveWithViewContainer,
    TestInDialogComponent
  ],
  declarations: [
    ComponentWithChildViewContainer,
    DirectiveWithViewContainer,
    TestInDialogComponent
  ],
  entryComponents: [
    ComponentWithChildViewContainer,
    TestInDialogComponent
  ]
})
class DialogTestModule { }

// import { Component } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { StoreModule, Store, combineReducers } from '@ngrx/store';
// // import { MatDialogModule } from '../../../modules/material-module';
// // import {
// //   MatIcon,
// //   MatDialogContent, MatDialogTitle, MatDialogActions,
// //   MatButton, MatFormField, MatRipple } from '@angular/material';
// import {
//   MatIcon,
//   MatDialog,
//   MatDialogRef,
//   MAT_DIALOG_DATA,
//   MatDialogContent,
//   MatDialogActions,
//   MatFormField,
//   MatRipple
// } from '@angular/material';
// import {
//   MatInput
// } from '@angular/material/input';
//
// import { FeedbackComponent } from './feedback.component';
// import { EnterFeedbackComponent } from '../../components/enter-feedback/enter-feedback.component';
// import { SubmitFeedbackComponent } from '../submit-feedback/submit-feedback.component';
//
// import * as feedbackActions from '../../actions/feedback';
// import * as fromFeedback from '../../reducers/feedback';
//
// // import { MatDialog } from '@angular/material';
// @Component({
//   selector: 'app-test-host',
//   template: `
//   <h1>Test Host</h1>
//   `
// })
// export class TestHostComponent {
//   private dialog: MatDialog;
//
//   constructor () {
//     // const dialogRef: MatDialogRef = this.dialog.open(
//     //   FeedbackComponent, {
//     //     width: '600px',
//     //     height: '600px'
//     //   }
//     // );
//   }
// }
//
// describe('FeedbackComponent', () => {
//   // let fixture: ComponentFixture<FeedbackComponent>;
//   let fixture: ComponentFixture<TestHostComponent>;
//   let store: Store<fromFeedback.State>;
//   // let instance: FeedbackComponent;
//   let instance = TestHostComponent;
//   let dispatch: any;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         StoreModule.forRoot({
//           feedback: combineReducers(fromFeedback.reducer)
//         }),
//         // MaterialModule
//       ],
//       declarations: [
//         TestHostComponent,
//         FeedbackComponent,
//         EnterFeedbackComponent,
//         SubmitFeedbackComponent,
//         MatIcon,
//         MatDialog,
//         MatDialogContent,
//         // MatDialogTitle,
//         MatDialogActions,
//         // MatButton,
//         MatInput,
//         MatFormField,
//         MatRipple
//       ]
//     });
//
//     // fixture = TestBed.createComponent(FeedbackComponent);
//     fixture = TestBed.createComponent(TestHostComponent);
//
//     store = TestBed.get(Store);
//     instance = fixture.componentInstance;
//
//     dispatch = spyOn(store, 'dispatch');
//   });
//
//   /**
//    * Container components are used as integration points for connecting
//    * the store to presentational components and dispatching
//    * actions to the store.
//    *
//    * Container methods that dispatch events are like a component's output
//    * observables.  Container properties that select state from store are like a
//    * component's input properties.  If pure components are functions of their
//    * inputs, containers are functions of state
//    *
//    * Traditionally you would query the components rendered template
//    * to validate its state. Since the components are analogous to
//    * pure functions, we take snapshots of these components for a given state
//    * to validate the rendered output and verify the component's output
//    * against changes in state.
//    */
//    it('should match previous snapshot', () => {
//      fixture.detectChanges();
//
//      expect(fixture).toMatchSnapshot();
//    });
//
//    xit('should dispatch an submit feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.SubmitFeedback($event);
//
//      instance.submit($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
//    xit('should dispatch a confirm feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.ConfirmFeedback($event);
//
//      instance.confirm($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
//    xit('should dispatch a change feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.ChangeFeedback($event);
//
//      instance.change($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
//    xit('should dipatch a cancel feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.CancelFeedback($event);
//
//      instance.cancel($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
// });
