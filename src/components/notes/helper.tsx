import { Note } from 'src/types/note';
import { Color } from '../../config';

// TODO REMOVE THIS FILE ...

const BIG_TITLE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor dui aliquam sapien mattis';
const TITLE = 'Lorem ipsum dolor sit amet';
const CONTENT = `
  Aenean eget efficitur sem. Donec sodales malesuada laoreet. 
  Curabitur in imperdiet tellus. Nullam faucibus neque eget magna viverra, in facilisis dolor iaculis. 
  Vivamus eget massa iaculis, commodo lectus a, blandit ligula. Duis eget felis quis libero tristique maximus placerat vel ipsum. 
  Integer tincidunt ante vitae tellus fermentum feugiat.
`;

export const Note1 = {
  title: BIG_TITLE,
  content: CONTENT + CONTENT,
  color: Color.SHARK,
};

export const Note2 = {
  title: TITLE,
  content: CONTENT,
};

export const getNote = (withTitle?: boolean): Note => ({
  title: withTitle ? TITLE : undefined,
  content: CONTENT,
  color: Color.getRandomColor(),
});
