/**
 * STATE
 */
export interface Note {
  id?: number;
  title?: string;
  content?: string;
  color: string;
}

export interface NoteState {
  items: Array<Note>;
  listType: 'list' | 'grid';
  note: Note;
}

/**
 * ACTIONS
 */

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SET_NOTE = 'SET_NOTE';
export const SET_LIST_TYPE = 'SET_LIST_TYPE';

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}

interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: Note;
}

interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  payload: Note;
}

interface SetNoteAction {
  type: typeof SET_NOTE;
  payload: Note;
}

export interface SetListTypeAction {
  type: typeof SET_LIST_TYPE;
  listType: 'list' | 'grid';
}

export type NoteActionTypes =
  | AddNoteAction
  | RemoveNoteAction
  | UpdateNoteAction
  | SetNoteAction
  | SetListTypeAction;
