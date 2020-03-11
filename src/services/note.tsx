import { Color } from '../config';
import { Note } from '../store/types';

export const generateNoteId = () => Math.floor(Math.random() * Date.now());

export const createNote = (): Note => ({
  id: generateNoteId(),
  title: '',
  content: '',
  color: Color.SHARK.value,
});
