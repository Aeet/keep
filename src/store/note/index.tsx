import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import noteReducer, { initialNoteState } from './reducer';
import { NoteState, NoteActionTypes } from './types';

type Dispatch = (action: NoteActionTypes) => void;
type NoteProviderProps = { children: ReactNode };

const NoteStateContext = createContext<NoteState | undefined>(undefined);
const NoteDispatchContext = createContext<Dispatch | undefined>(undefined);

const NoteProvider = ({ children }: NoteProviderProps) => {
  const [state, dispatch] = useReducer(noteReducer, initialNoteState);

  return (
    <NoteStateContext.Provider value={state}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteStateContext.Provider>
  );
};

function useNote(): [NoteState, Dispatch] {
  const state = useContext(NoteStateContext);
  const dispatch = useContext(NoteDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error('useNote must be used within a NoteProvider');
  }
  return [state, dispatch];
}

const withNote = (WrappedComponent: any) => (props: any) => (
  <NoteStateContext.Consumer>
    {state => {
      if (state === undefined) {
        throw new Error('withNote must be used within a NoteProvider');
      }
      return (
        <NoteDispatchContext.Consumer>
          {dispatch => {
            if (dispatch === undefined) {
              throw new Error('withNote must be used within a NoteProvider');
            }
            return (
              <WrappedComponent
                {...props}
                noteState={state}
                noteDispatch={dispatch}
              />
            );
          }}
        </NoteDispatchContext.Consumer>
      );
    }}
  </NoteStateContext.Consumer>
);

const withNoteState = (WrappedComponent: any) => (props: any) => (
  <NoteStateContext.Consumer>
    {state => {
      if (state === undefined) {
        throw new Error('withNote must be used within a NoteProvider');
      }
      return <WrappedComponent {...props} noteState={state} />;
    }}
  </NoteStateContext.Consumer>
);

const withNoteDispatch = (WrappedComponent: any) => (props: any) => (
  <NoteDispatchContext.Consumer>
    {dispatch => {
      if (dispatch === undefined) {
        throw new Error('withNote must be used within a NoteProvider');
      }
      return <WrappedComponent {...props} noteDispatch={dispatch} />;
    }}
  </NoteDispatchContext.Consumer>
);

export { NoteProvider, useNote, withNote, withNoteState, withNoteDispatch };
