import {
  Note,
  ADD_NOTE,
  REMOVE_NOTE,
  SET_LIST_TYPE,
  NoteActionTypes,
  SetListTypeAction,
} from './types';

export function addNote(newNote: Note): NoteActionTypes {
  return {
    type: ADD_NOTE,
    payload: newNote,
  };
}

export function removeNote(note: Note): NoteActionTypes {
  return {
    type: REMOVE_NOTE,
    payload: note,
  };
}

export function setListType(
  listType: SetListTypeAction['listType'],
): NoteActionTypes {
  return {
    type: SET_LIST_TYPE,
    listType,
  };
}
