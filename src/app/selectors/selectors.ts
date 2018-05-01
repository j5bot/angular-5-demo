import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as utilities from '../../utilities/utilities';

import * as app from '../reducers/app';
import * as feedback from '../reducers/feedback';

export const properties = utilities.createProperties( { app, feedback } );
