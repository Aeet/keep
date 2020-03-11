import { generateNoteList } from './data';
import { Note } from './types';
import {
  NoteState,
  NoteActionTypes,
  ADD_NOTE,
  REMOVE_NOTE,
  SET_LIST_TYPE,
} from './types';

export const initialNoteState: NoteState = {
  items: generateNoteList(10),
  listType: 'list',
};

export default function noteReducer(
  state: NoteState,
  action: NoteActionTypes,
): NoteState {
  switch (action.type) {
    case ADD_NOTE: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case REMOVE_NOTE: {
      const note: Note = action.payload;
      if (state.items.some((item: Note) => item.id === note.id)) {
        return {
          ...state,
          items: state.items.filter((item: Note) => item.id !== note.id),
        };
      }
      return state;
    }
    case SET_LIST_TYPE: {
      return { ...state, listType: action.listType };
    }
    default: {
      type OtherAction = undefined | null | { type?: string };
      throw new Error(
        `Unhandled action type: ${(action as OtherAction)?.type ?? action}`,
      );
    }
  }
}
