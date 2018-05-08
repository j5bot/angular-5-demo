// import { createFeatureSelector, createSelector, select } from '@ngrx/store';
// import { State } from '../app/reducers';
// import { featureSelectors } from '../app/selectors/selectors';
//
// // const fs = {
// //   app: createFSapp,
// //   feedback: createFSfeedback
// // };
//
// export const createAccessor: Function = (key) => {
//   return (state) => state[ key ];
// };
//
// export const createAccessors = (defaultState) => {
//
//   const accessors = {};
//
//   Object.keys(defaultState).map( (key) => {
//     accessors[ key ] = (state) => state[ key ];
//   });
//
//   return accessors;
//
// };
//
// export const createProperties = (reducers: Object) => {
//
//   const slices = {} as any;
//   const properties = {} as any;
//
//   const states = {};
//
//   // for every property of the default state,
//   // make a selector
//   Object.keys( states ).map( (slice) => {
//
//     let property, sliceSelector;
//
//     sliceSelector = slices[ slice ] = createSelector(
//       featureSelectors[ slice ],
//       (state) => state[ slice ]
//     );
//
//     property = properties[ slice ] = {};
//     Object.keys( states[ slice ] ).map(
//       (key) => {
//           property[ key ] = createSelector(
//             sliceSelector, reducers[ slice ].accessors[ key ]
//           );
//       }
//     );
//
//   });
//
//   return properties;
//
// };
//
// const subscriptions = {};
//
// export const addPropertyGettersToObject = ({
//   slice, object, selectors, properties }:
//     { slice?: string, object: any, selectors: any, properties: any }
// ) => {
//   properties.map( function getProperty (prop) {
//
//     Object.defineProperty( object, prop, {
//       get: function getInstanceProperty() {
//         const propSelector = this.store.pipe(select(selectors[prop]));
//
//         if ( subscriptions[`${slice}.${prop}`] ) {
//           return propSelector;
//         }
//
//         subscriptions[`${slice}.${prop}`] =
//           propSelector.subscribe(
//             (value) => {
//               console.log(`slice: ${ slice }, prop: ${ prop } = ${ value }` );
//             }
//           );
//
//         return propSelector;
//       }
//     });
//
//   });
// };
//
// export const addPropertyGettersToPrototype = (params) => {
//   params.object = params.object.prototype;
//   return addPropertyGettersToObject(params);
// };
//
//     // return Component.prototype[prop] = function () {
//     // const propSelector = this.store.pipe(select(selectors[prop]));
//       // subscriptions.push(
//       //   propSelector.subscribe(
//       //     (value) => {
//       //       console.log(`prop: ${ slice }.${ prop } selector = ${ value }`);
//       //     }
//       //   )
//       // );
//       // return propSelector;
//   //   };
//   // });
// // };
