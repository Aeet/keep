import { Note } from './types';
import { Color } from '../../config';

const createId = () => Math.floor(Math.random() * Date.now());

const TITLE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor dui aliquam sapien mattis';
const CONTENT = `
  Aenean eget efficitur sem. Donec sodales malesuada laoreet. 
  Curabitur in imperdiet tellus. Nullam faucibus neque eget magna viverra, in facilisis dolor iaculis. 
  Vivamus eget massa iaculis, commodo lectus a, blandit ligula. Duis eget felis quis libero tristique maximus placerat vel ipsum. 
  Integer tincidunt ante vitae tellus fermentum feugiat.
`;

export const generatetNote = (
  withTitle: boolean,
  contentSize: number,
): Note => ({
  id: createId(),
  title: withTitle
    ? TITLE.slice(0, Math.random() * (TITLE.length - 26) + 26)
    : undefined,
  content: CONTENT.slice(0, Math.min(contentSize, CONTENT.length)),
  color: Color.getRandomColor().value,
});

export const generateNoteList = (count: number): Array<Note> => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(
      generatetNote(
        Math.random() >= 0.3, // with title or not
        Math.random() * (CONTENT.length - 50) + 50, // number between [50 and CONTENT.length]
      ),
    );
  }

  return data;
};

export const Notes = generateNoteList(5);
