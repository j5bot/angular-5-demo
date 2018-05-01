import { createFeatureSelector, createSelector } from '@ngrx/store';

export const createAccessors = (defaultState) => {

  const accessors = {};
  Object.keys(defaultState).map( (key) => {
    accessors[ key ] = (state) => state[ key ];
  });

  return accessors;

};

export const createProperties = (reducers: Object) => {

  const slices = {} as any;
  const properties = {} as any;

  const states = {};
  Object.keys( reducers ).map( (reducer) => {
    states[ reducer ] = reducers[ reducer ].defaultState;
  });

  // for every property of the default state,
  // make a selector
  Object.keys(states).map( (slice) => {

    let property, sliceSelector;

    sliceSelector = slices[ slice ] = createSelector(
      createFeatureSelector( slice ),
      (state) => states[ slice ]
    );

    property = properties[ slice ] = {};
    Object.keys( states[ slice ] ).map(
      (key) => {
          property[ key ] = createSelector(
            sliceSelector, reducers[ slice ].accessors[ key ]
          );
      }
    );

  });

  return properties;

};
