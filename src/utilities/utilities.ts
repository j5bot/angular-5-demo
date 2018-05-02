import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

interface AccessorFunctionWrapper {
  key: string;
  accessor: Function;
}

export const createAccessor: Function = (key) => {
  return (state) => state[ key ];
};

export const createAccessorFn = function (state, key): AccessorFunctionWrapper {
  return {
    key,
    accessor: createAccessor(state, key)
  } as AccessorFunctionWrapper;
};

export const createAccessors = (defaultState) => {

  const cafn = createAccessorFn.bind(null, defaultState);

  const accessors = {};

  Object.keys(defaultState)
    .map( cafn )
    .map( (fn: AccessorFunctionWrapper) => {
      accessors[ fn.key ] = fn.accessor;
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

export const addPropertyGettersToPrototype = ({
  Component, selectors, properties }
) => {
  properties.map( (prop) => {
    return Component.prototype[prop] = function () {
      return this.store.select(selectors[prop]);
    };
  });
};
