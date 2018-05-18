import { TestBed } from '@angular/core/testing';

import { AppModule } from './app.module';

import {
  AppComponent,
  FeedbackComponent
} from './containers';

import {
  EnterButtonComponent,
  EnterFeedbackComponent,
  SubmitFeedbackComponent
} from './components';

const createProvider = (componentClass) => {
  return {
    provide: componentClass,
    useValue: componentClass
  };
};

const createProviders = (components) => {
  return components.map( createProvider );
};

const components = [
  AppComponent,
  EnterButtonComponent,
  EnterFeedbackComponent,
  FeedbackComponent,
  SubmitFeedbackComponent
];

describe('AppModule', () => {

  beforeEach( () => {

    TestBed.configureTestingModule({

      imports: [
        AppModule
      ],
      providers: [
        createProviders( components )
      ]

    });

  });

  components.forEach( (component) => {

    it(`should provide ${ component.name } component`, () => {

      expect( TestBed.get( component ) ).toBeTruthy();

    });

  } );

  // it('provides AppComponent container', () => {
  //
  //   expect( TestBed.get(AppComponent) ).toBeTruthy();
  //
  // });
  //
  // it('provides FeedbackComponent container', () => {
  //
  //   expect( TestBed.get(FeedbackComponent) ).toBeTruthy();
  //
  // });

});
