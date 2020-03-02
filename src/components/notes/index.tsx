import React, { SFC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NoteItem from './NoteItem';
import { Notes as NoteList } from './helper';
import { Note } from 'src/types/note';

const Notes: SFC<any> = ({ navigation }) => {
  const goToNoteBuilder = (note: Note) =>
    navigation.navigate('NoteBuilder', { noteId: note?.id });

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    >
      <View style={styles.wrapper}>
        {NoteList.map((note: Note) => (
          <NoteItem
            key={note.id}
            note={note}
            editNote={() => goToNoteBuilder(note)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#202124',
  },
  wrapper: {
    marginTop: 16,
    marginBottom: 20,
  },
});
