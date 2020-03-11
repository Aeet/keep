import { generateNoteList } from './data';
import { Note } from './types';
import {
  NoteState,
  NoteActionTypes,
  ADD_NOTE,
  UPDATE_NOTE,
  REMOVE_NOTE,
  SET_NOTE,
  SET_LIST_TYPE,
} from './types';
import { Color } from '../../config';

export const initialNoteState: NoteState = {
  items: generateNoteList(10),
  listType: 'list',
  note: {
    title: '',
    content: '',
    color: Color.SHARK.value,
  },
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
    case UPDATE_NOTE: {
      const note = action.payload;
      return {
        ...state,
        items: state.items.map((item: Note) =>
          item.id === note.id ? { ...note } : item,
        ),
      };
    }
    case SET_NOTE: {
      const note = action.payload;
      return {
        ...state,
        note,
      };
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
