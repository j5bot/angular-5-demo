export interface State {
  feedback: boolean;
}

export const defaultState = {
  feedback: true
};

export function reducer ( state = defaultState, action: any ) {
  return state;
}

export const accessors = {};
Object.keys(defaultState).map( (key) => {
  accessors[ key ] = (state: State) => state[ key ];
});
